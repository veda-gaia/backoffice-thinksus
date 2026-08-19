import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { QuestionRow } from "src/app/interfaces/document-verification/question-row.interface";
import { DocumentVerificationService } from "src/app/services/document-verification.service";
import { EsgRatingService } from "src/app/services/esg-rating.service";
import { AiSuggestionService } from "src/app/services/ai-suggestion.service";
import { AiSuggestionItemInterface } from "src/app/interfaces/ai-suggestion/ai-suggestion.interface";
import {
  AREA_LABELS,
  PILAR_BY_AREA,
  PILAR_LABELS,
} from "src/app/enums/answer-area.enum";
import { AiSuggestionStatusEnum } from "src/app/enums/ai-suggestion-status.enum";
import { finalize, forkJoin } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

interface DocumentRow {
  question: string;
  answer: string;
  document: string;
  status: string;
}
@Component({
  selector: "app-document-verification-detail",
  templateUrl: "./document-verification-detail.component.html",
  styleUrls: ["./document-verification-detail.component.scss"],
})
export class DocumentVerificationDetailComponent
  implements OnInit, AfterViewInit
{
  displayedColumns: string[] = ["question", "answer", "document", "status"];
  dataSource = new MatTableDataSource<QuestionRow>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  company: any;
  score: number = 0;

  aiSuggestions: AiSuggestionItemInterface[] = [];
  /** Blocos por pilar -> area, para a exibicao agrupada (ADR-0031). */
  aiGroups: Array<{
    pilar: string;
    pilarLabel: string;
    areas: Array<{ areaLabel: string; suggestion: AiSuggestionItemInterface }>;
  }> = [];
  esgRatingId = "";
  generationRevision = 0;
  generationStatus = "";
  aiListaDesatualizada = false;
  editingSuggestionId: string | null = null;
  editingText = "";
  readonly AiSuggestionStatusEnum = AiSuggestionStatusEnum;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: EsgRatingService,
    private readonly aiSuggestionService: AiSuggestionService,
    private readonly router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.esgRatingId = id;
      this.spinner.show();
      forkJoin({
        rating: this.service.getById(id),
        aiSuggestions: this.aiSuggestionService.getByRating(id),
      })
        .pipe(
          finalize(() => {
            this.spinner.hide();
          })
        )
        .subscribe({
          next: ({ rating, aiSuggestions }) => {
            this.dataSource.data = rating.answers
              .filter((a: any) => a.documentsPath && a.documentsPath.length > 0)
              .map((a: any) => ({
                questionId: a.questionId._id,
                question: a.questionId.name,
                answer:
                  a.answer === "Yes"
                    ? "Sim"
                    : a.answer === "No"
                      ? "NÃ£o"
                      : a.answer,
                document:
                  a.documentsPath && a.documentsPath.length > 0
                    ? a.documentsPath
                    : [],
                status:
                  a.documentsPath && a.documentsPath.length > 0
                    ? a.status || "PENDING"
                    : "APPROVED",
              }));

            this.company = rating.company;
            this.score = rating.esgScore;

            // Um documento vigente por avaliacao desde o indice unique.
            const doc = (aiSuggestions || [])[0];
            this.aiSuggestions = doc?.suggestions ?? [];
            this.generationRevision = doc?.generationRevision ?? 0;
            this.generationStatus = doc?.generationStatus ?? "";
            this.aiListaDesatualizada = false;
            this.agruparSugestoes();
          },
        });
    }
  }

  /**
   * Agrupa as sugestoes por pilar -> area. A quantidade e DINAMICA: so vem
   * area que teve vulnerabilidade, entao pode ser 9, 12 ou 3 â€” nunca assumir
   * um numero fixo.
   */
  private agruparSugestoes(): void {
    const porPilar = new Map<string, any[]>();

    for (const sug of this.aiSuggestions) {
      const pilar = PILAR_BY_AREA[sug.area];
      if (!pilar) {
        console.error(
          `[Curadoria] Area desconhecida "${sug.area}" na sugestao ${sug._id}; ignorada.`,
        );
        continue;
      }
      const lista = porPilar.get(pilar) ?? [];
      lista.push({ areaLabel: AREA_LABELS[sug.area] ?? sug.area, suggestion: sug });
      porPilar.set(pilar, lista);
    }

    this.aiGroups = ["E", "S", "G"]
      .filter((p) => (porPilar.get(p) ?? []).length > 0)
      .map((p) => ({
        pilar: p,
        pilarLabel: PILAR_LABELS[p],
        areas: porPilar.get(p) ?? [],
      }));
  }

  isAllApproved(): boolean {
    return this.dataSource.data.every(
      (row: any) => row.status === "APPROVED"
    );
  }

  canSubmitReview(): boolean {
    const gate1 = this.isAllApproved();
    // Exige geracao bem-sucedida: um documento FAILED tem `suggestions: []`,
    // e `[].every()` e true por vacuidade â€” a avaliacao passaria o gate sem
    // curadoria nenhuma.
    const gate2 =
      this.generationStatus === "SUCCESS" &&
      this.aiSuggestions.length > 0 &&
      this.aiSuggestions.every(
        (s) =>
          s.status === AiSuggestionStatusEnum.APPROVED ||
          s.status === AiSuggestionStatusEnum.EDITED,
      );

    return gate1 && gate2;
  }

  approveSuggestion(suggestion: AiSuggestionItemInterface): void {
    this.spinner.show();
    this.aiSuggestionService
      .approve(suggestion._id, this.esgRatingId, this.generationRevision)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: () => {
          suggestion.status = AiSuggestionStatusEnum.APPROVED;
        },
        error: (err) => {
          if (this.tratarListaDesatualizada(err)) return;
          console.error("Erro ao aprovar sugestÃ£o", err);
        },
      });
  }

  startEditSuggestion(suggestion: AiSuggestionItemInterface): void {
    this.editingSuggestionId = suggestion._id;
    this.editingText = suggestion.text.pt;
  }

  cancelEditSuggestion(): void {
    this.editingSuggestionId = null;
    this.editingText = "";
  }

  saveEditSuggestion(suggestion: AiSuggestionItemInterface): void {
    this.spinner.show();
    this.aiSuggestionService
      .edit(
        suggestion._id,
        { textPt: this.editingText },
        this.esgRatingId,
        this.generationRevision,
      )
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: () => {
          suggestion.text.pt = this.editingText;
          suggestion.status = AiSuggestionStatusEnum.EDITED;
          this.cancelEditSuggestion();
        },
        error: (err) => {
          if (this.tratarListaDesatualizada(err)) return;
          console.error("Erro ao editar sugestÃ£o", err);
        },
      });
  }

  /**
   * 409 AI_SUGGESTIONS_STALE: o cliente reenviou a avaliacao e as sugestoes
   * foram regeradas, entao os _id da tela nao existem mais. Antes disso a API
   * so dizia "Suggestion <id> not found" e o auditor concluia que o botao
   * estava quebrado.
   */
  private tratarListaDesatualizada(err: any): boolean {
    const codigo = err?.error?.code ?? err?.code;
    if (err?.status !== 409 && codigo !== "AI_SUGGESTIONS_STALE") return false;

    this.aiListaDesatualizada = true;
    return true;
  }

  recarregarSugestoes(): void {
    this.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  sendReview(): void {
    const updatedAnswers = this.dataSource.data.map((row: any) => ({
      questionId: row.questionId,
      status: row.status,
    }));

    const formId = this.route.snapshot.paramMap.get("id");

    const dto = { answers: updatedAnswers };

    this.spinner.show();

    this.service
      .sendReview(formId!, dto)
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(["/document-verification"]);
        },
        error: (err) => {
          console.error("Erro ao enviar revisÃ£o", err);
        },
      });
  }
}

