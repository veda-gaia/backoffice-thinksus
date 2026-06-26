import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-governance-docs",
  templateUrl: "./governance-docs.component.html",
})
export class GovernanceDocsComponent {
  projectId = environment.snaps.projectId;
  apiKey = environment.snaps.apiKey;
  apiUrl = environment.snaps.apiUrl;
}
