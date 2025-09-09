import { JsonPipe } from "@angular/common";
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
    start.setMonth(end.getMonth() - 9);

    this.spinner.show();

    this._dashboardService
      .getdashboardata(start, end)
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
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
}
