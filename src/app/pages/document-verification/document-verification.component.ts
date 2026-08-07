import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs";
import { FormInterface } from "src/app/interfaces/forms/form.interface";
import { EsgRatingService } from "src/app/services/esg-rating.service";

interface DocumentRow {
  company: string;
  section: string;
  segment: string;
  esgScore: number;
  verifiedDocument: number;
  pendingDocument: number;
  status: string;
  id: string;
}

@Component({
  selector: "app-document-verification",
  templateUrl: "./document-verification.component.html",
  styleUrls: ["./document-verification.component.scss"],
})
export class DocumentVerificationComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    "company",
    "section",
    "segment",
    "esgScore",
    "verifiedDocument",
    "pendingDocument",
    "status",
    "action",
  ];
  dataSource = new MatTableDataSource<DocumentRow>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  statusMap: { [key: string]: string } = {
    DRAFT: "Rascunho",
    IN_PROGRESS: "Em progresso",
    COMPLETED: "Completo",
    UNDER_ANALYSIS: "Em análise",
    DOCUMENTS_PENDING: "Documentos pendentes",
  };

  constructor(
    private service: EsgRatingService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getStatusLabel(status: string): string {
    return this.statusMap[status] || status;
  }

  // Setor/segmento vêm populados pela API como { _id, name }. Quando o populate
  // não acontece o valor chega como ObjectId cru, que não deve ir pra tela.
  private getRefName(ref: any): string {
    if (!ref) return "-";

    // Referência populada (formato atual): { _id, name }
    if (typeof ref === "object") return ref.name || "-";

    // A base carrega três formatos para section/segment, resultado de uma
    // migração de enum para coleção de referência que nunca foi concluída:
    // documento populado, ObjectId (cru ou em string) e o código de enum
    // antigo ("Industry", "sugar_cane"). Só o último é legível por si — os
    // ObjectId viram "-" porque a tela não tem como resolvê-los sem o populate,
    // hoje impossível de ligar porque quebraria a listagem inteira.
    if (typeof ref === "string") {
      return /^[0-9a-fA-F]{24}$/.test(ref) ? "-" : ref;
    }

    return "-";
  }

  private loadData(): void {
    this.spinner.show();
    this.service
      .list()
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe({
        next: (data) => {
          var lstForms = data
            .filter(
              (a: any) =>
                a.status == "UNDER_ANALYSIS" ||
                a.status == "COMPLETED" ||
                a.status == "DOCUMENTS_PENDING"
            )
            .map((item) => {
              const verified = item.answers.filter(
                (ans: any) =>
                  ans.documentsPath &&
                  ans.documentsPath.length > 0 &&
                  ans.status === "APPROVED"
              ).length;

              const pending = item.answers.filter(
                (ans: any) =>
                  ans.documentsPath &&
                  ans.documentsPath.length > 0 &&
                  ans.status !== "APPROVED"
              ).length;

              return {
                company: item.company.company,
                section: this.getRefName(item.company.section),
                segment: this.getRefName(item.company.segment),
                esgScore: item.esgScore ?? 0,
                verifiedDocument: verified,
                pendingDocument: pending,
                status: item.status,
                id: item._id,
              };
            });

          this.dataSource.data = lstForms;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
