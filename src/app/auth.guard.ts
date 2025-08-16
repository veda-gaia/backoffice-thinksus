import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService,
    private router: Router,
  ) {}

  async canActivate(): Promise<boolean> {
    try {
      var userActive = await firstValueFrom(this.auth.getAuthUser());

      if (userActive) return true;

      this.router.navigate(['/login']);
      return false;
    } catch (error) {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
