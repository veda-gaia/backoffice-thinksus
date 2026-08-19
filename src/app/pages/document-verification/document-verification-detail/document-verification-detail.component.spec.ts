import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { DocumentVerificationDetailComponent } from './document-verification-detail.component';
import { EsgRatingService } from 'src/app/services/esg-rating.service';
import { AiSuggestionService } from 'src/app/services/ai-suggestion.service';
import { AiSuggestionStatusEnum } from 'src/app/enums/ai-suggestion-status.enum';

describe('DocumentVerificationDetailComponent', () => {
  let component: DocumentVerificationDetailComponent;
  let fixture: ComponentFixture<DocumentVerificationDetailComponent>;
  let esgRatingServiceSpy: jasmine.SpyObj<EsgRatingService>;
  let aiSuggestionServiceSpy: jasmine.SpyObj<AiSuggestionService>;

  const mockRating = {
    answers: [],
    company: { company: 'Empresa X' },
    esgScore: 80,
  };

  const mockAiSuggestions = [
    {
      _id: 'doc1',
      esgRatingId: 'rating1',
      generationRevision: 2,
      generationStatus: 'SUCCESS',
      suggestions: [
        {
          _id: 'item1',
          area: 'Nature',
          text: { pt: 'SugestÃ£o 1', en: '', es: '' },
          status: AiSuggestionStatusEnum.PENDING,
        },
        {
          _id: 'item2',
          area: 'Fair_Work',
          text: { pt: 'SugestÃ£o 2', en: '', es: '' },
          status: AiSuggestionStatusEnum.APPROVED,
        },
      ],
    },
  ];

  beforeEach(() => {
    esgRatingServiceSpy = jasmine.createSpyObj('EsgRatingService', [
      'getById',
      'sendReview',
    ]);
    esgRatingServiceSpy.getById.and.returnValue(of(mockRating));

    aiSuggestionServiceSpy = jasmine.createSpyObj('AiSuggestionService', [
      'getByRating',
      'approve',
      'edit',
    ]);
    aiSuggestionServiceSpy.getByRating.and.returnValue(of(mockAiSuggestions as any));

    TestBed.configureTestingModule({
      declarations: [DocumentVerificationDetailComponent],
      imports: [CommonModule, TranslateModule.forRoot()],
      providers: [
        { provide: EsgRatingService, useValue: esgRatingServiceSpy },
        { provide: AiSuggestionService, useValue: aiSuggestionServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'rating1' } } },
        },
        {
          provide: NgxSpinnerService,
          useValue: { show: () => {}, hide: () => {} },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(DocumentVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should flatten AI suggestion documents into individual items', () => {
    expect(component.aiSuggestions.length).toBe(2);
    expect(component.aiSuggestions[0]._id).toBe('item1');
  });

  it('should expose every assessment answer in the read-only answers tab', () => {
    esgRatingServiceSpy.getById.and.returnValue(
      of({
        ...mockRating,
        answers: [
          {
            answer: 'Yes',
            documentsPath: [],
            questionId: {
              _id: 'question1',
              name: 'A empresa possui uma política ambiental?',
              dimension: 'E',
              area: { name: 'Natureza' },
            },
          },
          {
            answer: 'Not apply',
            documentsPath: ['evidence.pdf'],
            status: 'PENDING',
            questionId: {
              _id: 'question2',
              name: 'A empresa monitora sua cadeia de valor?',
              dimension: 'S',
              area: { name: 'Cadeia de valor' },
            },
          },
        ],
      }),
    );

    component.ngOnInit();

    expect(component.allAnswers.length).toBe(2);
    expect(component.allAnswers[0].answer).toBe('Sim');
    expect(component.allAnswers[1].answer).toBe('Não se aplica');
    expect(component.allAnswers[1].hasDocument).toBe(true);
    expect(component.dataSource.data.length).toBe(1);
  });

  describe('canSubmitReview (Dual-Gate)', () => {
    it('should block submission when there are pending AI suggestions (Gate 2)', () => {
      expect(component.canSubmitReview()).toBe(false);
    });

    it('should block submission when there are no AI suggestions at all', () => {
      component.aiSuggestions = [];
      expect(component.canSubmitReview()).toBe(false);
    });

    it('should allow submission when all docs approved and all suggestions APPROVED or EDITED', () => {
      component.generationStatus = 'SUCCESS';
      component.aiSuggestions = [
        { ...mockAiSuggestions[0].suggestions[0], status: AiSuggestionStatusEnum.APPROVED } as any,
        { ...mockAiSuggestions[0].suggestions[1], status: AiSuggestionStatusEnum.EDITED } as any,
      ];
      expect(component.canSubmitReview()).toBe(true);
    });

    it('should block submission when a document is rejected (Gate 1)', () => {
      component.dataSource.data = [
        { status: 'APPROVED' } as any,
        { status: 'REJECTED' } as any,
      ];
      component.generationStatus = 'SUCCESS';
      component.aiSuggestions = [
        {
          ...mockAiSuggestions[0].suggestions[0],
          status: AiSuggestionStatusEnum.APPROVED,
        } as any,
      ];

      expect(component.canSubmitReview()).toBe(false);
    });
  });

  describe('approveSuggestion', () => {
    it('should call the API with the individual item id and mark it APPROVED', () => {
      const suggestion = component.aiSuggestions[0];
      aiSuggestionServiceSpy.approve.and.returnValue(of({} as any));

      component.approveSuggestion(suggestion);

      // Envia tambem o rating e a revisao vigente: sem isso a API nao distingue
      // "lista velha" de "item invalido".
      expect(aiSuggestionServiceSpy.approve).toHaveBeenCalledWith(
        'item1',
        component.esgRatingId,
        component.generationRevision,
      );
      expect(suggestion.status).toBe(AiSuggestionStatusEnum.APPROVED);
    });
  });

  describe('edit flow', () => {
    it('should save edited text and mark suggestion as EDITED', () => {
      const suggestion = component.aiSuggestions[0];
      aiSuggestionServiceSpy.edit.and.returnValue(of({} as any));

      component.startEditSuggestion(suggestion);
      component.editingText = 'Texto editado';
      component.saveEditSuggestion(suggestion);

      expect(aiSuggestionServiceSpy.edit).toHaveBeenCalledWith(
        'item1',
        { textPt: 'Texto editado' },
        component.esgRatingId,
        component.generationRevision,
      );
      expect(suggestion.text.pt).toBe('Texto editado');
      expect(suggestion.status).toBe(AiSuggestionStatusEnum.EDITED);
      expect(component.editingSuggestionId).toBeNull();
    });
  });

  describe('geracao FAILED e lista desatualizada', () => {
    it('bloqueia o envio quando a geracao falhou, mesmo sem itens pendentes', () => {
      // Documento FAILED tem suggestions: [], e [].every() e true por
      // vacuidade â€” o gate passaria sem curadoria nenhuma.
      component.generationStatus = 'FAILED';
      component.aiSuggestions = [];

      expect(component.canSubmitReview()).toBe(false);
    });

    it('sinaliza lista desatualizada no 409 AI_SUGGESTIONS_STALE', () => {
      const suggestion = component.aiSuggestions[0];
      aiSuggestionServiceSpy.approve.and.returnValue(
        throwError(() => ({ status: 409, error: { code: 'AI_SUGGESTIONS_STALE' } })),
      );

      component.approveSuggestion(suggestion);

      expect(component.aiListaDesatualizada).toBe(true);
      expect(suggestion.status).not.toBe(AiSuggestionStatusEnum.APPROVED);
    });
  });
});

