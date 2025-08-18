import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthenticationService } from "./services/authentication.service";
import { firstValueFrom } from "rxjs";
import { state } from "@angular/animations";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    return this.checkAuth();
  }

  async canActivateChild(): Promise<boolean> {
    return this.checkAuth();
  }

  private async checkAuth(): Promise<boolean> {
    try {
      const userActive = await firstValueFrom(this.auth.getAuthUser());
      if (userActive) return true;

      this.router.navigate(["/login"]);
      return false;
    } catch {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
