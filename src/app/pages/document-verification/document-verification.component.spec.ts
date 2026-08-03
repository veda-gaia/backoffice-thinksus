import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { DocumentVerificationComponent } from './document-verification.component';
import { EsgRatingService } from 'src/app/services/esg-rating.service';

describe('DocumentVerificationComponent (Sprint 5.0, card 983e297c)', () => {
  let component: DocumentVerificationComponent;
  let fixture: ComponentFixture<DocumentVerificationComponent>;
  let apiResponse: any[];

  // Payload realista: a API JÁ devolve setor, segmento e nota (esgScore) —
  // o problema não era o backend não enviar o dado, era o componente descartá-lo.
  const buildApiResponse = () => [
    {
      _id: 'rating-1',
      status: 'UNDER_ANALYSIS',
      esgScore: 67.5,
      company: {
        company: 'Empresa Teste Ltda',
        section: { _id: 'sec-1', name: 'Indústria' },
        segment: { _id: 'seg-1', name: 'Metalúrgica' },
      },
      answers: [
        { documentsPath: ['doc1.pdf'], status: 'APPROVED' },
        { documentsPath: ['doc2.pdf'], status: 'PENDING' },
      ],
    },
  ];

  beforeEach(() => {
    apiResponse = buildApiResponse();

    TestBed.configureTestingModule({
      declarations: [DocumentVerificationComponent],
      providers: [
        {
          provide: EsgRatingService,
          useValue: { list: () => of(apiResponse) },
        },
        {
          provide: NgxSpinnerService,
          useValue: { show: () => {}, hide: () => {} },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(DocumentVerificationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('setor, segmento e nota da API são levados para a linha da tabela', () => {
    fixture.detectChanges(); // dispara ngOnInit -> loadData()

    const row = component.dataSource.data[0] as any;

    expect(row).toBeDefined();
    // Estes três campos são o objeto do card 983e297c: a API já os fornecia
    // (ver mockApiResponse acima) e loadData() os descartava no mapeamento.
    expect(row.section).toBe('Indústria');
    expect(row.segment).toBe('Metalúrgica');
    expect(row.esgScore).toBe(67.5);

    // Confirma que os demais campos seguem intactos após a mudança.
    expect(row.company).toBe('Empresa Teste Ltda');
    expect(row.status).toBe('UNDER_ANALYSIS');
  });

  it('expõe as colunas de setor, segmento e nota na tabela', () => {
    fixture.detectChanges();

    expect(component.displayedColumns).toContain('section');
    expect(component.displayedColumns).toContain('segment');
    expect(component.displayedColumns).toContain('esgScore');
  });

  it('não vaza ObjectId cru quando setor/segmento não vêm populados', () => {
    // Cenário do populate ausente descrito no RCA (parte 2): antes do fix no
    // EsgRatingRepository, section/segment chegavam como ObjectId.
    apiResponse[0].company.section = '65f0a1b2c3d4e5f6a7b8c9d0';
    apiResponse[0].company.segment = undefined;

    fixture.detectChanges();

    const row = component.dataSource.data[0] as any;
    expect(row.section).toBe('-');
    expect(row.segment).toBe('-');
  });
});
