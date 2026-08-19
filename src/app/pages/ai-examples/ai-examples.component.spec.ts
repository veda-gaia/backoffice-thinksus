import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AiExamplesComponent } from './ai-examples.component';
import { AiExampleService } from 'src/app/services/ai-example.service';
import { AnswerAreaEnum } from 'src/app/enums/answer-area.enum';
import { SectionService } from 'src/app/services/sections.service';

describe('AiExamplesComponent', () => {
  let component: AiExamplesComponent;
  let fixture: ComponentFixture<AiExamplesComponent>;
  let aiExampleServiceSpy: jasmine.SpyObj<AiExampleService>;
  let modalServiceSpy: jasmine.SpyObj<NgbModal>;

  const mockExamples = [
    {
      _id: '1',
      area: AnswerAreaEnum.Nature,
      section: { _id: 'sec1', name: 'Cannabis' } as any,
      score: 80,
      inputContext: 'ctx',
      expectedOutput: 'output',
    },
  ];

  beforeEach(() => {
    aiExampleServiceSpy = jasmine.createSpyObj('AiExampleService', [
      'list',
      'remove',
    ]);
    aiExampleServiceSpy.list.and.returnValue(of(mockExamples as any));

    modalServiceSpy = jasmine.createSpyObj('NgbModal', ['open']);
    modalServiceSpy.open.and.returnValue({
      componentInstance: {},
      result: Promise.resolve('dismissed'),
    } as any);

    TestBed.configureTestingModule({
      declarations: [AiExamplesComponent],
      providers: [
        {
          provide: SectionService,
          useValue: { list: () => of([{ _id: 'sec1', name: 'Cannabis' }]) },
        },
        { provide: AiExampleService, useValue: aiExampleServiceSpy },
        { provide: NgbModal, useValue: modalServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(AiExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and load examples on init', () => {
    expect(component).toBeTruthy();
    expect(aiExampleServiceSpy.list).toHaveBeenCalledWith({
      area: undefined,
      section: undefined,
    });
    expect(component.dataSource.data).toEqual(mockExamples as any);
  });

  it('should reload examples with the selected filters on change', () => {
    component.filterArea = AnswerAreaEnum.Fair_Work;
    component.filterSection = 'sec1';

    component.onFilterChange();

    expect(aiExampleServiceSpy.list).toHaveBeenCalledWith({
      area: AnswerAreaEnum.Fair_Work,
      section: 'sec1',
    });
  });

  it('should open the create modal and reload examples when saved', () => {
    modalServiceSpy.open.and.returnValue({
      componentInstance: {},
      result: Promise.resolve('saved'),
    } as any);

    component.openCreateModal();

    expect(modalServiceSpy.open).toHaveBeenCalled();
  });
});
