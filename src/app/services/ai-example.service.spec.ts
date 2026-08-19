import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AiExampleService } from './ai-example.service';
import { environment } from 'src/environments/environment';
import { AnswerAreaEnum } from '../enums/answer-area.enum';

describe('AiExampleService', () => {
  let service: AiExampleService;
  let httpMock: HttpTestingController;
  const baseUrl = `${environment.api.path}/ai-examples`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AiExampleService],
    });

    service = TestBed.inject(AiExampleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should list examples without filters', () => {
    service.list().subscribe();

    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush({ data: [] });
  });

  it('should list examples filtered by area and section', () => {
    service
      .list({ area: AnswerAreaEnum.Nature, section: 'sec1' })
      .subscribe();

    const req = httpMock.expectOne(
      `${baseUrl}?area=Nature&section=sec1`,
    );
    expect(req.request.method).toBe('GET');
    req.flush({ data: [] });
  });

  it('should create an example', () => {
    const dto = {
      area: AnswerAreaEnum.Nature,
      score: 80,
      inputContext: 'ctx',
      expectedOutput: 'output',
    };

    service.create(dto as any).subscribe();

    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dto);
    req.flush({ data: {} });
  });

  it('should update an example', () => {
    service.update('id1', { score: 90 }).subscribe();

    const req = httpMock.expectOne(`${baseUrl}/id1`);
    expect(req.request.method).toBe('PUT');
    req.flush({ data: {} });
  });

  it('should soft-delete (remove) an example', () => {
    service.remove('id1').subscribe();

    const req = httpMock.expectOne(`${baseUrl}/id1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ data: {} });
  });
});
