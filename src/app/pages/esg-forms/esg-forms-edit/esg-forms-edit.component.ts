import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, tap } from 'rxjs';
import { QuestionInterface } from 'src/app/interfaces/forms/question.interface';
import { SectionInterface } from 'src/app/interfaces/forms/section.interface';
import { SegmentInterface } from 'src/app/interfaces/forms/segment.interface';
import { SectionService } from 'src/app/services/sections.service';
import { SegmentService } from 'src/app/services/segment.service';
import { EsgFormsQuestionComponent } from '../esg-forms-question/esg-forms-question.component';
import { EsgFormService } from 'src/app/services/esg-form.service';
import { FormInterface } from 'src/app/interfaces/forms/form.interface';
import { FormRegisterDto } from 'src/app/interfaces/forms/form-register-dto.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EsgFormsSectionComponent } from '../esg-forms-section/esg-forms-section.component';
import { EsgFormsSegmentComponent } from '../esg-forms-segment/esg-forms-segment.component';

@Component({
  selector: 'app-esg-forms-edit',
  templateUrl: './esg-forms-edit.component.html',
  styleUrls: ['./esg-forms-edit.component.scss'],
})
export class EsgFormsEditComponent implements AfterViewInit, OnInit, OnDestroy {
  esgForm!: FormGroup;
  sections$!: Observable<SectionInterface[]>;
  segments$!: Observable<SegmentInterface[]>;
  displayedColumns: string[] = [
    'question',
    'dimension',
    'area',
    'weight',
    'document',
    'action',
  ];
  dataSource = new MatTableDataSource<QuestionInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private fb: FormBuilder,
    private _sectionService: SectionService,
    private _segmentService: SegmentService,
    private _esgFormService: EsgFormService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.esgForm = this.fb.group({
      id: [null],
      sectionId: [null],
      segmentIds: [[]],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id != '') this.setFormIdSession(id ?? '');

    this.loadSection();

    this.esgForm.get('sectionId')!.valueChanges.subscribe((id: string) => {
      this.segments$ = this._segmentService.getbySection(id);
    });

    const formSessionId = this.getFormIdSession();
    if (formSessionId != '') {
      this._esgFormService.getbyID(formSessionId).subscribe({
        next: (form) => {
          this.esgForm.patchValue({
            id: form._id,
            sectionId: form.section._id,
            segmentIds: form.segments.map((x) => x._id),
          });

          this.dataSource = new MatTableDataSource<QuestionInterface>(
            form.questions,
          );
        },
      });
    }
  }

  loadSection() {
    this.sections$ = this._sectionService.list();
  }

  loadSegment() {
    const esgFormValues = this.esgForm.value;

    this.segments$ = this._segmentService
      .getbySection(esgFormValues.sectionId)
      .pipe(
        tap((segments) => {
          const validSelected =
            esgFormValues.segmentIds?.filter((id: string) =>
              segments.some((seg) => seg._id === id),
            ) || [];

          this.esgForm.patchValue({
            segmentIds: validSelected,
          });
        }),
      );
  }

  openUserEditModal(questionId?: string): void {
    const esgFormValues = this.esgForm.value;

    const dto: FormRegisterDto = {
      sectionId: esgFormValues.sectionId,
      segments: esgFormValues.segmentIds,
    };

    if (esgFormValues.id == null) {
      this._esgFormService.register(dto).subscribe({
        next: (data) => {
          this.setFormIdSession(data._id);
          this.openModal(data?._id);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.openModal(this.getFormIdSession() ?? '', questionId ?? '');
    }
  }

  openSectionEditModal(): void {
    const dialogSection = this.modalService.open(EsgFormsSectionComponent);
    dialogSection.result.then((result) => {
      if (result === 'updated') {
        this.loadSection();
      }
    });
  }

  openSegmentEditModal(): void {
    const esgFormValues = this.esgForm.value;

    const dialogSegment = this.modalService.open(EsgFormsSegmentComponent);
    dialogSegment.componentInstance.sectionId = esgFormValues.sectionId;
    dialogSegment.result.then((result) => {
      if (result === 'updated') {
        this.loadSegment();
      }
    });
  }

  onSubmit() {
    //if (this.esgForm.invalid) return;

    const esgFormValues = this.esgForm.value;

    const dto: FormRegisterDto = {
      _id: this.getFormIdSession(),
      sectionId: esgFormValues.sectionId,
      segments: esgFormValues.segmentIds,
    };

    this._esgFormService.register(dto).subscribe({
      next: (data) => {
        this.setFormIdSession('');
        this.router.navigate(['/forms']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openModal(formId?: string, questionId?: string) {
    const dialogUser = this.modalService.open(EsgFormsQuestionComponent);
    dialogUser.componentInstance.formId = formId;
    dialogUser.componentInstance.questionId = questionId;
    dialogUser.result.then((result) => {
      if (result === 'updated') {
        this.updateQuestions(formId);
      }
    });
  }

  updateQuestions(esgFormId?: string): void {
    if (esgFormId == '') return;

    this._esgFormService.listQuestionbyForm(esgFormId!).subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<QuestionInterface>(data);
      },
    });
  }

  setFormIdSession(esgFormId?: string) {
    sessionStorage.setItem('currentFormId', esgFormId ?? '');
  }

  getFormIdSession() {
    return sessionStorage.getItem('currentFormId') ?? '';
  }

  ngOnDestroy(): void {
    localStorage.removeItem('currentFormId');
  }
}
