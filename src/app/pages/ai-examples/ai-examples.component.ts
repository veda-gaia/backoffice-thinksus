import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AiExampleService } from 'src/app/services/ai-example.service';
import { AiExampleInterface } from 'src/app/interfaces/ai-example/ai-example.interface';
import {
  AnswerAreaEnum,
  AREA_LABELS,
  PILAR_BY_AREA,
  PILAR_LABELS,
} from 'src/app/enums/answer-area.enum';
import { SectionService } from 'src/app/services/sections.service';
import { SectionInterface } from 'src/app/interfaces/forms/section.interface';
import { AiExampleFormComponent } from './ai-example-form/ai-example-form.component';

@Component({
  selector: 'app-ai-examples',
  templateUrl: './ai-examples.component.html',
  styleUrls: ['./ai-examples.component.scss'],
})
export class AiExamplesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['area', 'section', 'score', 'inputContext', 'acoes'];
  dataSource = new MatTableDataSource<AiExampleInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /** As 12 areas agrupadas por pilar, para o filtro. */
  readonly gruposDeArea = ['E', 'S', 'G'].map((pilar) => ({
    pilar,
    label: PILAR_LABELS[pilar],
    areas: Object.values(AnswerAreaEnum)
      .filter((area) => PILAR_BY_AREA[area] === pilar)
      .map((area) => ({ value: area, label: AREA_LABELS[area] })),
  }));

  /** Carregados do banco (ADR-0033), nao de enum. */
  sections: SectionInterface[] = [];

  filterArea: AnswerAreaEnum | null = null;
  filterSection: string | null = null;

  constructor(
    private readonly aiExampleService: AiExampleService,
    private readonly modalService: NgbModal,
    private readonly sectionService: SectionService,
  ) {}

  rotuloArea(area: string): string {
    return AREA_LABELS[area] ?? area;
  }

  nomeSection(section: any): string {
    if (!section) return 'Genérico';
    return typeof section === 'object' ? section.name ?? 'Genérico' : 'Genérico';
  }

  ngOnInit(): void {
    this.sectionService.list().subscribe({
      next: (sections) => (this.sections = sections || []),
      error: () => (this.sections = []),
    });
    this.loadExamples();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadExamples(): void {
    this.aiExampleService
      .list({
        area: this.filterArea ?? undefined,
        section: this.filterSection ?? undefined,
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
