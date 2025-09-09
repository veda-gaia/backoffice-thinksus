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
  verifiedDocument: number;
  pendingDocument: number;
  status: string;
}

@Component({
  selector: "app-document-verification",
  templateUrl: "./document-verification.component.html",
  styleUrls: ["./document-verification.component.scss"],
})
export class DocumentVerificationComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    "company",
    "verifiedDocument",
    "pendingDocument",
    "status",
    "action",
  ];
  dataSource = new MatTableDataSource<DocumentRow>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
          var lstForms = data.map((item) => {
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
