import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-roadmap",
  templateUrl: "./roadmap.component.html",
})
export class RoadmapComponent {
  projectId = environment.snaps.projectId;
  apiKey = environment.snaps.apiKey;
}
