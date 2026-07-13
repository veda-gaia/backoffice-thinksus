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

  approve(suggestionItemId: string): Observable<AiSuggestionInterface> {
    return this.httpClient
      .put(`${this.url}/${suggestionItemId}/approve`, {}, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  edit(
    suggestionItemId: string,
    dto: { textPt?: string; textEn?: string; textEs?: string },
  ): Observable<AiSuggestionInterface> {
    return this.httpClient
      .put(`${this.url}/${suggestionItemId}/edit`, dto, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
