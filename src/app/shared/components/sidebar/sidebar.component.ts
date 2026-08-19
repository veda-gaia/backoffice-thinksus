import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs";
import LocalStorageUtil, {
  LocalStorageKeys,
} from "src/app/util/localStorage.util";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  sidebarOpen = true;
  currentUrl = "";
  openMenus: { [key: string]: boolean } = {
    esg: false,
    governance: false,
  };

  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.expandActiveMenu(this.router.url);

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentUrl = e.urlAfterRedirects;
      });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleMenu(key: string) {
    this.openMenus[key] = !this.openMenus[key];
  }

  expandActiveMenu(url: string) {
    if (
      url.startsWith("/document-verification") ||
      url.startsWith("/forms") ||
      url.startsWith("/ai-examples")
    ) {
      this.openMenus["esg"] = true;
    }
    if (url.startsWith("/governance")) {
      this.openMenus["governance"] = true;
    }
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.sidebarOpen = false;
  }

  isActive(path: string): boolean {
    return this.currentUrl.startsWith(path);
  }

  logout() {
    this.router.navigate(["/login"]);
    LocalStorageUtil.remove(LocalStorageKeys.user);
  }
}
