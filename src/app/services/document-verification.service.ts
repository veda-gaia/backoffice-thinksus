import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";
import { BaseService } from "./base.service";
import { environment } from "src/environments/environment";
import { QuestionRow } from "../interfaces/document-verification/question-row.interface";

@Injectable({
  providedIn: "root",
})
export class DocumentVerificationService extends BaseService {
  private readonly url = `${environment.api.path}/document-verification`;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  get(id: string): Observable<QuestionRow[]> {
    return this.httpClient
      .get(`${this.url}/${id}`, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
