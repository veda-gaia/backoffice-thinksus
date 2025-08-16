import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SegmentInterface } from '../interfaces/forms/segment.interface';
import { DimensionAreaInterface } from '../interfaces/forms/dimension-area.interface';
import { QuestionInterface } from '../interfaces/forms/question.interface';
import { FormInterface } from '../interfaces/forms/form.interface';
import { FormRegisterDto } from '../interfaces/forms/form-register-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class EsgFormService extends BaseService {
  private readonly url: string = `${environment.api.path}/esg-forms`;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  listDimensionArea(): Observable<DimensionAreaInterface[]> {
    return this.httpClient
      .get(`${this.url}/list-dimension-area`, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  listAreabyDimension(
    dimensionCode: string,
  ): Observable<DimensionAreaInterface[]> {
    return this.httpClient
      .get(
        `${this.url}/list-area-by-dimension/${dimensionCode}`,
        this.authorizedHeader(),
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  registerQuestion(dto: QuestionInterface): Observable<QuestionInterface> {
    return this.httpClient
      .post(
        `${this.url}/register-question`,
        this.encrypt(dto),
        this.authorizedHeader(),
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  register(dto: FormRegisterDto): Observable<FormRegisterDto> {
    return this.httpClient
      .post(`${this.url}/register`, this.encrypt(dto), this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  listQuestionbyForm(esgFormId: string): Observable<QuestionInterface[]> {
    return this.httpClient
      .get(
        `${this.url}/list-question-form/${esgFormId}`,
        this.authorizedHeader(),
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getbyID(esgFormId: string): Observable<FormInterface> {
    return this.httpClient
      .get(`${this.url}/id/${esgFormId}`, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  list(): Observable<FormInterface[]> {
    return this.httpClient
      .get(`${this.url}/list`, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getQuestionbyID(questionId: string): Observable<QuestionInterface> {
    return this.httpClient
      .get(`${this.url}/question-by-id/${questionId}`, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
