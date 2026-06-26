import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-support-board",
  templateUrl: "./support-board.component.html",
})
export class SupportBoardComponent {
  projectId = environment.snaps.projectId;
  apiKey = environment.snaps.apiKey;
  apiUrl = environment.snaps.apiUrl;
}
