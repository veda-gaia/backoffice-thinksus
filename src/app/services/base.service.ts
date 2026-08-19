import { HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { throwError } from 'rxjs';
import CryptoUtil from '../util/crypto.util';
import LocalStorageUtil, { LocalStorageKeys } from '../util/localStorage.util';
import { environment } from 'src/environments/environment';

export abstract class BaseService {
  protected anonymousHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  /**
   * `params` opcional para endpoints que precisam de query string junto do
   * token (ex.: curadoria de sugestoes, que envia esgRatingId e
   * generationRevision). Sem argumento o comportamento e o mesmo de antes.
   */
  protected authorizedHeader(params?: Record<string, string | number>) {
    const user = LocalStorageUtil.get(LocalStorageKeys.user);
    const options: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      }),
    };

    if (params) {
      let httpParams = new HttpParams();
      for (const [chave, valor] of Object.entries(params)) {
        if (valor !== undefined && valor !== null) {
          httpParams = httpParams.set(chave, String(valor));
        }
      }
      options.params = httpParams;
    }

    return options;
  }

  protected authorizedHeaderMulti() {
    const user = LocalStorageUtil.get(LocalStorageKeys.user);
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${user?.token}`,
      }),
    };
  }

  protected extractData(response: any) {
    return response.data || {};
  }

  protected resp(response: any) {
    return response || {};
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];
    let customResponse = new Error();
    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknown Error') {
        customError.push('Unknown Error');
        response.error.errors = customError;
      }
    }
    if (response.status === 500) {
      customError.push('Error processing request');
      customResponse.error.errors = customError;
      return throwError(() => customResponse);
    }
    return throwError(() => response);
  }
  protected extractCryptoData(response: any) {
    const decryptedData = CryptoUtil.decrypt(
      environment.encrypt_key,
      response.data.payload
    );
    return JSON.parse(decryptedData);
  }
  protected encrypt(request: any) {

    if (!isDevMode()) {

      const encryptedData = CryptoUtil.encrypt(
        environment.encrypt_key,
        JSON.stringify(request)
      );
      return { payload: encryptedData };
    }
    return request
  }
}
class Error {
  error: ErrorResponse = new ErrorResponse();
}
class ErrorResponse {
  errors: string[] = [];
}
