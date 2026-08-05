import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AiExampleService } from 'src/app/services/ai-example.service';
import { PilarEnum } from 'src/app/enums/pilar.enum';
import { CompanySectionEnum } from 'src/app/enums/company-section.enum';

@Component({
  selector: 'app-ai-example-form',
  templateUrl: './ai-example-form.component.html',
  styleUrls: ['./ai-example-form.component.scss'],
})
export class AiExampleFormComponent implements OnInit {
  @Input() exampleId?: string;

  form!: FormGroup;
  pilares = Object.values(PilarEnum);
  setores = Object.values(CompanySectionEnum);
  loading = false;

  constructor(
    private readonly fb: FormBuilder,
    public readonly activeModal: NgbActiveModal,
    private readonly aiExampleService: AiExampleService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      pilar: [null, Validators.required],
      setor: [null],
      score: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      inputContext: ['', Validators.required],
      expectedOutput: ['', Validators.required],
    });

    if (this.exampleId) {
      this.loading = true;
      this.aiExampleService.getById(this.exampleId).subscribe({
        next: (example) => {
          this.form.patchValue({
            pilar: example.pilar,
            setor: example.setor ?? null,
            score: example.score,
            inputContext: example.inputContext,
            expectedOutput: example.expectedOutput,
          });
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
      setor: this.form.value.setor || undefined,
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
