import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';
import { FormInterface } from "src/app/interfaces/forms/form.interface";

interface DocumentRow {
  company: string;
  verifiedDocument: number;
  pendingDocument: number;
  status: string;
}

@Component({
  selector: 'app-document-verification',
  templateUrl: './document-verification.component.html',
  styleUrls: ['./document-verification.component.scss'],
})
export class DocumentVerificationComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'company',
    'verifiedDocument',
    'pendingDocument',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<DocumentRow>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    // private service: DocumentVerificationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
     this.loadMockData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private loadMockData(): void {
     const mock: DocumentRow[] = [
       { company: 'Empresa A', verifiedDocument: 3, pendingDocument: 1, status: 'Em andamento' },
       { company: 'Empresa B', verifiedDocument: 5, pendingDocument: 0, status: 'Concluído' },
     ];
     this.dataSource.data = mock;
   }
}