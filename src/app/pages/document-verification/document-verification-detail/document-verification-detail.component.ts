import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { QuestionRow } from "src/app/interfaces/document-verification/question-row.interface";
import { DocumentVerificationService } from "src/app/services/document-verification.service";
import { EsgRatingService } from "src/app/services/esg-rating.service";
import { finalize } from "rxjs";
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

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: EsgRatingService,
    private readonly router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.spinner.show();
      this.service
        .getById(id)
        .pipe(
          finalize(() => {
            this.spinner.hide();
          })
        )
        .subscribe((res: any) => {
          this.dataSource.data = res.answers.map((a: any) => ({
            question: a.questionNumber,
            answer:
              a.answer === "Yes" ? "Sim" : a.answer === "No" ? "Não" : a.answer,
            document:
              a.documentsPath && a.documentsPath.length > 0
                ? a.documentsPath
                : [],
            status:
              a.documentsPath && a.documentsPath.length > 0
                ? a.status || "PENDING"
                : "APPROVED",
          }));

          this.company = res.company;
          this.score = res.esgScore;
        });
    }
  }

  isAllApproved(): boolean {
    return this.dataSource.data.every((row: any) => row.status !== "PENDING");
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  sendReview(): void {
    const updatedAnswers = this.dataSource.data.map((row: any) => ({
      questionNumber: row.question,
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
