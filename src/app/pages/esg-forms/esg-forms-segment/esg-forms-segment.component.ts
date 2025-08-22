import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SectionService } from 'src/app/services/sections.service';
import { SectionRegisterDto } from 'src/app/interfaces/forms/section-register-dto';
import { SegmentService } from 'src/app/services/segment.service';
import { SegmentRegisterDto } from 'src/app/interfaces/forms/segment-register-dto';

@Component({
  selector: 'app-esg-forms-segment',
  templateUrl: './esg-forms-segment.component.html',
  styleUrls: ['./esg-forms-segment.component.scss'],
})
export class EsgFormsSegmentComponent implements OnInit {
  segmentForm!: FormGroup;
  @Input() sectionId!: string;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public segmentService: SegmentService,
  ) {}

  ngOnInit(): void {
    this.segmentForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.segmentForm.valid) {
      const formValue = this.segmentForm.value;

      const dto: SegmentRegisterDto = {
        name: formValue.name,
        sectionId: this.sectionId,
      };

      this.segmentService.register(dto).subscribe({
        next: () => this.activeModal.close('updated'),
        error: (err) => {
          console.error('Erro ao registrar Segment:', err);
          alert(
            'Erro ao salvar Segment. Verifique os dados e tente novamente.',
          );
        },
      });
    } else {
      this.segmentForm.markAllAsTouched();
    }
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
