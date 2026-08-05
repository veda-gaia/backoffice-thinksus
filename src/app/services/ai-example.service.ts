import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { AiExampleInterface } from '../interfaces/ai-example/ai-example.interface';
import { PilarEnum } from '../enums/pilar.enum';
import { CompanySectionEnum } from '../enums/company-section.enum';

@Injectable({
  providedIn: 'root',
})
export class AiExampleService extends BaseService {
  private readonly url: string = `${environment.api.path}/ai-examples`;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  list(filters?: {
    pilar?: PilarEnum;
    setor?: CompanySectionEnum;
  }): Observable<AiExampleInterface[]> {
    let params = new HttpParams();
    if (filters?.pilar) params = params.set('pilar', filters.pilar);
    if (filters?.setor) params = params.set('setor', filters.setor);

    return this.httpClient
      .get(`${this.url}`, { ...this.authorizedHeader(), params })
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getById(id: string): Observable<AiExampleInterface> {
    return this.httpClient
      .get(`${this.url}/${id}`, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  create(dto: AiExampleInterface): Observable<AiExampleInterface> {
    return this.httpClient
      .post(`${this.url}`, dto, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  update(id: string, dto: Partial<AiExampleInterface>): Observable<AiExampleInterface> {
    return this.httpClient
      .put(`${this.url}/${id}`, dto, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  remove(id: string): Observable<AiExampleInterface> {
    return this.httpClient
      .delete(`${this.url}/${id}`, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
