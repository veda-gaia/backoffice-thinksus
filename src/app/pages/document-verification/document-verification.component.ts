import { JsonPipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs";
import { FormInterface } from "src/app/interfaces/forms/form.interface";

@Component({
  selector: "app-document-verification",
  templateUrl: "./document-verification.component.html",
  styleUrls: ["./document-verification.component.scss"],
})
export class DocumentVerificationComponent {
}
  filteredList: any[] = [];
  loading = true;
  displayedColumns: string[] = [
    "company",
    "verified-document",
    "pending-document",
    "status",
    "action",
  ];
 dataSource = new MatTableDataSource<FormInterface>([]);

   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
 
   constructor(
    //  private _esgFormService: EsgFormService,
     private spinnerService: NgxSpinnerService
   ) {}
 
   ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   }
 
  //  ngOnInit(): void {
  //    this.updateEsgforms();
  //  }
 
  //  updateEsgforms(): void {
  //    this.spinnerService.show();
  //    this._esgFormService
  //      .list()
  //      .pipe(
  //        finalize(() => {
  //          this.spinnerService.hide();
  //        })
  //      )
  //      .subscribe({
  //        next: (data) => {
  //          this.dataSource = new MatTableDataSource<FormInterface>(data);
  //          this.dataSource.paginator = this.paginator;
  //        },
  //      });
  //  }
  