import { JsonPipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { CompanyService } from "src/app/services/company.service";
import { ContractedPlanService } from "src/app/services/contracted-plan.service";
import { EsgRatingService } from "src/app/services/esg-rating.service";
import { initialScoreArray } from "src/app/util/initial-score-array.util";
import { ScoreWarningComponent } from "../score-warning/score-warning.component";
import { finalize } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  @ViewChild("contentModal") contentModal: any;

  avaliationStatus = "";
  userName = "";
  companySection = "agro";
  loading = true;

  graphData: any = [];
  graphConfig: any = {
    displayModeBar: false,
    responsive: true,
    scrollZoom: false,
    staticPlot: true,
  };

  environmentalQuestions = 0;
  socialQuestions = 0;
  governanceQuestions = 0;

  environmentalInfo = {
    progress: 0,
    score: 0,
  };
  socialInfo = {
    progress: 0,
    score: 0,
  };
  governanceInfo = {
    progress: 0,
    score: 0,
  };
  distributionESG: any = {
    environmental: 0,
    governance: 0,
    social: 0,
  };

  odsScoreArray: any[] = [];
  postOdsScoreArray: any[] = [];
  allCompleteAvaliations: any[] = [];
  postAvaliationInfo: any;

  constructor() {}
}
