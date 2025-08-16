import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { EsgRatingService } from 'src/app/services/esg-rating.service';
import LocalStorageUtil, {
  LocalStorageKeys,
} from 'src/app/util/localStorage.util';
import { initialScoreArray } from 'src/app/util/initial-score-array.util';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarOpen = true;
  verifyRequested: string = 'false';
  companyScoreResponse: any;
  classPerScore: string = '';

  constructor(
    private router: Router,

    private spinnerService: NgxSpinnerService,
  ) {}

  ngOnInit() {
    this.spinnerService.show();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    this.router.navigate(['/login']);
    LocalStorageUtil.remove(LocalStorageKeys.user);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
