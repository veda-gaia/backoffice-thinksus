import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { AiSuggestionInterface } from '../interfaces/ai-suggestion/ai-suggestion.interface';

@Injectable({
  providedIn: 'root',
})
export class AiSuggestionService extends BaseService {
  private readonly url: string = `${environment.api.path}/ai-suggestions`;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  getByRating(esgRatingId: string): Observable<AiSuggestionInterface[]> {
    return this.httpClient
      .get(`${this.url}/rating/${esgRatingId}`, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  /**
   * `esgRatingId` e `generationRevision` sao obrigatorios: cada geracao
   * substitui o array e REGENERA os _id dos subdocumentos. Sem a revisao, uma
   * lista aberta antes de um reenvio devolveria "Suggestion not found" sem
   * dizer o porque.
   */
  approve(
    suggestionItemId: string,
    esgRatingId: string,
    generationRevision: number,
  ): Observable<AiSuggestionInterface> {
    return this.httpClient
      .put(
        `${this.url}/${suggestionItemId}/approve`,
        {},
        this.authorizedHeader({ esgRatingId, generationRevision }),
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  edit(
    suggestionItemId: string,
    dto: { textPt?: string; textEn?: string; textEs?: string },
    esgRatingId: string,
    generationRevision: number,
  ): Observable<AiSuggestionInterface> {
    return this.httpClient
      .put(
        `${this.url}/${suggestionItemId}/edit`,
        dto,
        this.authorizedHeader({ esgRatingId, generationRevision }),
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
