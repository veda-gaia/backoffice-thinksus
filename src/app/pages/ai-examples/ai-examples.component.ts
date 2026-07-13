import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AiExampleService } from 'src/app/services/ai-example.service';
import { AiExampleInterface } from 'src/app/interfaces/ai-example/ai-example.interface';
import { PilarEnum } from 'src/app/enums/pilar.enum';
import { CompanySectionEnum } from 'src/app/enums/company-section.enum';
import { AiExampleFormComponent } from './ai-example-form/ai-example-form.component';

@Component({
  selector: 'app-ai-examples',
  templateUrl: './ai-examples.component.html',
  styleUrls: ['./ai-examples.component.scss'],
})
export class AiExamplesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['pilar', 'setor', 'score', 'inputContext', 'acoes'];
  dataSource = new MatTableDataSource<AiExampleInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pilares = Object.values(PilarEnum);
  setores = Object.values(CompanySectionEnum);

  filterPilar: PilarEnum | null = null;
  filterSetor: CompanySectionEnum | null = null;

  constructor(
    private readonly aiExampleService: AiExampleService,
    private readonly modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.loadExamples();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadExamples(): void {
    this.aiExampleService
      .list({
        pilar: this.filterPilar ?? undefined,
        setor: this.filterSetor ?? undefined,
      })
      .subscribe({
        next: (examples) => {
          this.dataSource = new MatTableDataSource<AiExampleInterface>(examples);
          this.dataSource.paginator = this.paginator;
        },
      });
  }

  onFilterChange(): void {
    this.loadExamples();
  }

  openCreateModal(): void {
    const modalRef = this.modalService.open(AiExampleFormComponent);
    modalRef.result.then(
      (result) => {
        if (result === 'saved') this.loadExamples();
      },
      () => {},
    );
  }

  openEditModal(exampleId: string): void {
    const modalRef = this.modalService.open(AiExampleFormComponent);
    modalRef.componentInstance.exampleId = exampleId;
    modalRef.result.then(
      (result) => {
        if (result === 'saved') this.loadExamples();
      },
      () => {},
    );
  }

  removeExample(exampleId: string): void {
    if (!confirm('Deseja realmente desativar este exemplo?')) return;

    this.aiExampleService.remove(exampleId).subscribe({
      next: () => this.loadExamples(),
    });
  }
}
