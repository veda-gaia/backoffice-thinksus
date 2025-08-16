import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, map } from 'rxjs';
import AuthorizationInterface, {
  LoginInterface,
} from '../interfaces/authentication/authentication.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
  private readonly url: string = `${environment.api.path}/authentication`;
  public authUserSubject = new BehaviorSubject<AuthorizationInterface | null>(
    null,
  );
  public readonly authUser$ = this.authUserSubject.asObservable();

  constructor(
    private readonly httpClient: HttpClient,
    private injector: Injector,
  ) {
    super();
    const userJson = localStorage.getItem('user');
    const user = userJson
      ? (JSON.parse(userJson) as AuthorizationInterface)
      : null;
    this.authUserSubject = new BehaviorSubject<AuthorizationInterface | null>(
      user,
    );
  }

  setAuthUser(user: AuthorizationInterface) {
    this.authUserSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getAuthUser(): Observable<AuthorizationInterface | null> {
    var user = localStorage.getItem('user');
    return this.authUserSubject.asObservable();
  }

  login(dto: LoginInterface): Observable<AuthorizationInterface> {
    return this.httpClient
      .post(
        `${this.url}/authenticate-backoffice`,
        this.encrypt(dto),
        this.anonymousHeader(),
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  loginWithToken(): Observable<AuthorizationInterface> {
    return this.httpClient
      .post(`${this.url}/authenticate-with-token`, {}, this.authorizedHeader())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  logout() {
    localStorage.removeItem('user');
    this.authUserSubject.next(null);
    const userService = this.injector.get(UserService);
    userService.setUser(null);
  }
}
