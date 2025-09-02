import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { QuestionRow } from "src/app/interfaces/document-verification/question-row.interface";
import { DocumentVerificationService } from "src/app/services/document-verification.service";

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

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: DocumentVerificationService
  ) {}

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get("id");
  //   if (id) {
  //     this.service.get(id).subscribe((rows) => {
  //       this.dataSource.data = rows;
  //     });
  //   }
  // }

  ngOnInit(): void {
    this.loadMockData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  sendReview(): void {
    // TODO: implement review submission
  }

  private loadMockData(): void {
    const mock: DocumentRow[] = [
      {
        question:
          "Is there any carbon footprint control and mitigation actions?",
        answer: "Sim",
        document: "documento.pdf",
        status: "Em andamento",
      },
      {
        question:
          "Does the energy source is provided by renewable energy sources? (solar, wind energy)",
        answer: "Não",
        document: "documento.pdf",
        status: "Concluído",
      },
    ];
    this.dataSource.data = mock;
  }
}
