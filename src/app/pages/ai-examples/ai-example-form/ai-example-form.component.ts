import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AiExampleService } from 'src/app/services/ai-example.service';
import {
  AnswerAreaEnum,
  AREA_LABELS,
  PILAR_BY_AREA,
  PILAR_LABELS,
} from 'src/app/enums/answer-area.enum';
import { SectionService } from 'src/app/services/sections.service';
import { SegmentService } from 'src/app/services/segment.service';
import { SectionInterface } from 'src/app/interfaces/forms/section.interface';
import { SegmentInterface } from 'src/app/interfaces/forms/segment.interface';

@Component({
  selector: 'app-ai-example-form',
  templateUrl: './ai-example-form.component.html',
  styleUrls: ['./ai-example-form.component.scss'],
})
export class AiExampleFormComponent implements OnInit {
  @Input() exampleId?: string;

  form!: FormGroup;

  /** As 12 areas agrupadas por pilar, para o select. */
  readonly gruposDeArea = ['E', 'S', 'G'].map((pilar) => ({
    pilar,
    label: PILAR_LABELS[pilar],
    areas: Object.values(AnswerAreaEnum)
      .filter((area) => PILAR_BY_AREA[area] === pilar)
      .map((area) => ({ value: area, label: AREA_LABELS[area] })),
  }));

  /** Carregadas do banco (ADR-0033): qualquer setor novo funciona sem deploy. */
  sections: SectionInterface[] = [];
  segments: SegmentInterface[] = [];
  loading = false;

  constructor(
    private readonly fb: FormBuilder,
    public readonly activeModal: NgbActiveModal,
    private readonly aiExampleService: AiExampleService,
    private readonly sectionService: SectionService,
    private readonly segmentService: SegmentService,
  ) {}

  private idDe(ref: any): string | null {
    if (!ref) return null;
    return typeof ref === 'object' ? ref._id ?? null : String(ref);
  }

  /**
   * Segmento depende do setor. Trocar o setor limpa o segmento: manter um
   * segmento de outro setor gravaria um vinculo que a API rejeita.
   */
  onSectionChange(): void {
    this.form.patchValue({ segment: null });
    this.carregarSegmentos(this.form.value.section);
  }

  private carregarSegmentos(sectionId: string | null): void {
    if (!sectionId) {
      this.segments = [];
      return;
    }

    this.segmentService.list().subscribe({
      next: (todos) => {
        this.segments = (todos || []).filter(
          (seg: any) => this.idDe(seg.section) === sectionId,
        );
      },
      error: () => {
        this.segments = [];
      },
    });
  }

  ngOnInit(): void {
    this.sectionService.list().subscribe({
      next: (sections) => (this.sections = sections || []),
      error: () => (this.sections = []),
    });

    this.form = this.fb.group({
      area: [null, Validators.required],
      section: [null],
      segment: [null],
      score: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      inputContext: ['', Validators.required],
      expectedOutput: ['', Validators.required],
    });

    if (this.exampleId) {
      this.loading = true;
      this.aiExampleService.getById(this.exampleId).subscribe({
        next: (example) => {
          this.form.patchValue({
            area: example.area,
            section: this.idDe(example.section),
            segment: this.idDe(example.segment),
            score: example.score,
            inputContext: example.inputContext,
            expectedOutput: example.expectedOutput,
          });
          this.carregarSegmentos(this.idDe(example.section));
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          alert('Erro ao carregar o exemplo. Tente novamente.');
          this.closeModal();
        },
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dto = {
      ...this.form.value,
      // Vazio significa exemplo generico; o backend espera ausencia, nao null.
      section: this.form.value.section || undefined,
      segment: this.form.value.segment || undefined,
    };

    const request$ = this.exampleId
      ? this.aiExampleService.update(this.exampleId, dto)
      : this.aiExampleService.create(dto);

    request$.subscribe({
      next: () => this.activeModal.close('saved'),
      error: () => {
        alert('Erro ao salvar o exemplo. Verifique os dados e tente novamente.');
      },
    });
  }

  closeModal(): void {
    this.activeModal.dismiss();
  }
}
