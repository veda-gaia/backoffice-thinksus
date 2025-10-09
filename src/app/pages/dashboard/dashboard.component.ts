import { Component, OnInit, ViewChild } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs";
import { DashboardService } from "src/app/services/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  @ViewChild("contentModal") contentModal: any;
  items: { value: number | string; label: string }[] = [];

  selectedPeriod: number = 30;

  periods = [
    { value: 30, label: "Últimos 30 dias" },
    { value: 60, label: "Últimos 60 dias" },
    { value: 90, label: "Últimos 90 dias" },
    { value: 120, label: "Últimos 120 dias" },
  ];

  constructor(
    private _dashboardService: DashboardService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loadDashboardInformation();
  }

  loadDashboardInformation(): void {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - this.selectedPeriod);

    this.spinner.show();

    this._dashboardService
      .getdashboardata(start, end)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: (data) => {
          this.items = [
            { value: data.documentsSents, label: "Documentos enviados" },
            { value: data.formsCount, label: "Formulários" },
            { value: data.ratingFilled, label: "Avaliações realizadas" },
            { value: data.plansSubscribed, label: "Planos contratados" },
            { value: data.documentsChecked, label: "Documentos verificados" },
            { value: data.questionCount, label: "Perguntas criadas" },
            { value: data.ratingCompleted, label: "Avaliações concluídas" },
          ];
        },
        error: (err) => {
          console.error("Erro ao carregar dashboard", err);
        },
      });
  }

  onPeriodChange(): void {
    this.loadDashboardInformation();
  }
}
