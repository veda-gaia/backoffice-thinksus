import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AiExamplesComponent } from './ai-examples.component';
import { AiExampleService } from 'src/app/services/ai-example.service';
import { PilarEnum } from 'src/app/enums/pilar.enum';
import { CompanySectionEnum } from 'src/app/enums/company-section.enum';

describe('AiExamplesComponent', () => {
  let component: AiExamplesComponent;
  let fixture: ComponentFixture<AiExamplesComponent>;
  let aiExampleServiceSpy: jasmine.SpyObj<AiExampleService>;
  let modalServiceSpy: jasmine.SpyObj<NgbModal>;

  const mockExamples = [
    {
      _id: '1',
      pilar: PilarEnum.E,
      setor: CompanySectionEnum.Agribusiness,
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
      pilar: undefined,
      setor: undefined,
    });
    expect(component.dataSource.data).toEqual(mockExamples as any);
  });

  it('should reload examples with the selected filters on change', () => {
    component.filterPilar = PilarEnum.S;
    component.filterSetor = CompanySectionEnum.Industry;

    component.onFilterChange();

    expect(aiExampleServiceSpy.list).toHaveBeenCalledWith({
      pilar: PilarEnum.S,
      setor: CompanySectionEnum.Industry,
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
