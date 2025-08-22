import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs";
import { FormInterface } from "src/app/interfaces/forms/form.interface";
import { EsgFormService } from "src/app/services/esg-form.service";

@Component({
  selector: "app-esg-forms",
  templateUrl: "./esg-forms.component.html",
  styleUrls: ["./esg-forms.component.scss"],
})
export class EsgFormsComponent implements AfterViewInit, OnInit {
  filteredList: any[] = [];
  loading = true;
  displayedColumns: string[] = [
    "segments",
    "sector",
    "questions",
    "documents",
    "action",
  ];
  dataSource = new MatTableDataSource<FormInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _esgFormService: EsgFormService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.updateEsgforms();
  }

  updateEsgforms(): void {
    this.spinnerService.show();
    this._esgFormService
      .list()
      .pipe(
        finalize(() => {
          this.spinnerService.hide();
        })
      )
      .subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource<FormInterface>(data);
          this.dataSource.paginator = this.paginator;
        },
      });
  }
  countQuestionsWithDocumentNeeded(form: any): number {
    return form.questions?.filter((q: any) => q.documentNeeded)?.length || 0;
  }

  getSegmentName(form: any): string[] {
    return form.segments?.map((x: any) => x.name) || [];
  }
}
