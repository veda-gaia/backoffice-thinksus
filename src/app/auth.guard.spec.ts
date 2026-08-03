import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './services/authentication.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: jasmine.SpyObj<AuthenticationService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthenticationService', ['getAuthUser']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthenticationService, useValue: authService },
        { provide: Router, useValue: router },
      ],
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('allows activation when there is an authenticated user', async () => {
    authService.getAuthUser.and.returnValue(
      of({ id: 'user-1', email: 'user@teste.com', name: 'Usuário Teste', token: 'fake-token' }),
    );

    const result = await guard.canActivate();

    expect(result).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('redirects to /login and blocks activation when there is no authenticated user', async () => {
    authService.getAuthUser.and.returnValue(of(null));

    const result = await guard.canActivate();

    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('redirects to /login and blocks activation when getAuthUser errors', async () => {
    authService.getAuthUser.and.returnValue(throwError(() => new Error('boom')));

    const result = await guard.canActivate();

    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
