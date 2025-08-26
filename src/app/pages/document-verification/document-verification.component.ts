import { JsonPipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-document-verification",
  templateUrl: "./document-verification.component.html",
  styleUrls: ["./document-verification.component.scss"],
})
export class DocumentVerificationComponent {}
  dataSource = new MatTableDataSource<FormInterface>([]);
  