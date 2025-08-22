import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SectionService } from 'src/app/services/sections.service';
import { SectionRegisterDto } from 'src/app/interfaces/forms/section-register-dto';

@Component({
  selector: 'app-esg-forms-section',
  templateUrl: './esg-forms-section.component.html',
  styleUrls: ['./esg-forms-section.component.scss'],
})
export class EsgFormsSectionComponent implements OnInit {
  sectionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public sectionService: SectionService,
  ) {}

  ngOnInit(): void {
    this.sectionForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.sectionForm.valid) {
      const formValue = this.sectionForm.value;

      const dto: SectionRegisterDto = {
        name: formValue.name,
      };

      this.sectionService.register(dto).subscribe({
        next: () => this.activeModal.close('updated'),
        error: (err) => {
          console.error('Erro ao registrar Section:', err);
          alert(
            'Erro ao salvar Section. Verifique os dados e tente novamente.',
          );
        },
      });
    } else {
      this.sectionForm.markAllAsTouched();
    }
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
