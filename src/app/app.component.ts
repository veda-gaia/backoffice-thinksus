import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import { AuthenticationService } from "./services/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  openSelectorLanguage = false;
  selectedLanguage: string;

  constructor(
    private translateService: TranslateService,
    public authService: AuthenticationService
  ) {
    const userLang = navigator.language || "pt";
    const languageCode = userLang.split("-")[0];
    this.selectedLanguage = languageCode;

    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    this.translateService.use(language);
  }

  toggleSelector() {
    this.openSelectorLanguage = !this.openSelectorLanguage;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("user");
  }
}
