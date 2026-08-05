import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { QuestionRow } from "src/app/interfaces/document-verification/question-row.interface";
import { DocumentVerificationService } from "src/app/services/document-verification.service";
import { EsgRatingService } from "src/app/services/esg-rating.service";
import { AiSuggestionService } from "src/app/services/ai-suggestion.service";
import { AiSuggestionItemInterface } from "src/app/interfaces/ai-suggestion/ai-suggestion.interface";
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
                      ? "Não"
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

            this.aiSuggestions = (aiSuggestions || []).flatMap(
              (doc) => doc.suggestions,
            );
          },
        });
    }
  }

  isAllApproved(): boolean {
    return this.dataSource.data.every((row: any) => row.status !== "PENDING");
  }

  canSubmitReview(): boolean {
    const gate1 = this.isAllApproved();
    const gate2 =
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
      .approve(suggestion._id)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: () => {
          suggestion.status = AiSuggestionStatusEnum.APPROVED;
        },
        error: (err) => {
          console.error("Erro ao aprovar sugestão", err);
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
      .edit(suggestion._id, { textPt: this.editingText })
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: () => {
          suggestion.text.pt = this.editingText;
          suggestion.status = AiSuggestionStatusEnum.EDITED;
          this.cancelEditSuggestion();
        },
        error: (err) => {
          console.error("Erro ao editar sugestão", err);
        },
      });
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
          console.error("Erro ao enviar revisão", err);
        },
      });
  }
}
