import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { distinctUntilChanged, Observable, startWith } from 'rxjs';
import { DimensionAreaInterface } from 'src/app/interfaces/forms/dimension-area.interface';
import { EsgFormService } from 'src/app/services/esg-form.service';
import { QuestionInterface } from 'src/app/interfaces/forms/question.interface';

@Component({
  selector: 'app-esg-forms-question',
  templateUrl: './esg-forms-question.component.html',
  styleUrls: ['./esg-forms-question.component.scss'],
})
export class EsgFormsQuestionComponent implements OnInit {
  questionForm!: FormGroup;
  odsList = [
    { id: 1, nome: '1 - Combate à pobreza' },
    { id: 2, nome: '2 - Fome zero e agricultura sustentável' },
    { id: 3, nome: '3 - Saúde e Bem-Estar' },
    { id: 4, nome: '4 - Educação de qualidade' },
    { id: 5, nome: '5 - Igualdade de gênero' },
    { id: 6, nome: '6 - Água potável e saneamento' },
    { id: 7, nome: '7 - Energia limpa e acessível' },
    { id: 8, nome: '8 - Trabalho decente e crescimento econômico' },
    { id: 9, nome: '9 - Indústria, inovação e infraestrutura' },
    { id: 10, nome: '10 - Redução das desigualdades' },
    { id: 11, nome: '11 - Cidades e comunidades sustentáveis' },
    { id: 12, nome: '12 - Consumo e produção responsáveis' },
  ];
  isEditing = false;
  areas$!: Observable<DimensionAreaInterface[]>;
  @Input() formId!: string;
  @Input() questionId!: string;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public esgFormService: EsgFormService,
  ) {}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      id: [null],
      dimension: ['E', Validators.required],
      area: ['', Validators.required],
      question: ['', Validators.required],
      description: [''],
      type: ['Sim', Validators.required],
      weight: [null, Validators.required],
      odsEnvolved: [[]],
      needDocument: [true],
    });

    this.questionForm
      .get('dimension')!
      .valueChanges.pipe(
        startWith(this.questionForm.get('dimension')!.value),
        distinctUntilChanged(),
      )
      .subscribe((dimensionCode: string) => {
        this.areas$ = this.esgFormService.listAreabyDimension(dimensionCode);
      });

    if (this.questionId != null) this.loadQuestion();
  }

  loadQuestion() {
    this.esgFormService.getQuestionbyID(this.questionId).subscribe({
      next: (data) => {
        this.questionForm.patchValue({
          id: data._id,
          dimension: data.dimension,
          area: data.area._id,
          question: data.name,
          description: data.description,
          type: data.type,
          weight: data.weight,
          odsEnvolved: data.ods,
          needDocument: data.documentNeeded,
        });
      },
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      const formValue = this.questionForm.value;

      const dto: QuestionInterface = {
        dimension: formValue.dimension,
        name: formValue.question,
        type: formValue.type,
        weight: formValue.weight,
        description: formValue.description,
        ods: formValue.odsEnvolved,
        area: formValue.area,
        documentNeeded: formValue.needDocument,
        _id: this.questionId,
        createdAt: new Date(),
        updatedAt: new Date(),
        esgFormId: this.formId,
      };

      this.esgFormService.registerQuestion(dto).subscribe({
        next: () => this.activeModal.close('updated'),
        error: (err) => {
          console.error('Erro ao registrar Question:', err);
          alert(
            'Erro ao salvar Question. Verifique os dados e tente novamente.',
          );
        },
      });
    } else {
      this.questionForm.markAllAsTouched();
    }
  }

  toggleOds(id: number) {
    const odsSelecionados = this.questionForm.value.odsEnvolved;
    if (odsSelecionados.includes(id)) {
      this.questionForm.patchValue({
        odsEnvolved: odsSelecionados.filter((o: number) => o !== id),
      });
    } else {
      this.questionForm.patchValue({
        odsEnvolved: [...odsSelecionados, id],
      });
    }
  }

  onCancel() {
    this.questionForm.reset({
      needDocument: true,
      dimension: 'Ambiental',
      type: 'Sim',
      ods: [],
    });
    this.isEditing = false;
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
