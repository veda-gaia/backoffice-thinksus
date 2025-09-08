import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dashboard-card",
  templateUrl: "./dashboard-card.component.html",
  styleUrls: ["./dashboard-card.component.scss"],
})
export class DashboardCardComponent {
  @Input() value: string | number = 0;
  @Input() label: string = "";
}
