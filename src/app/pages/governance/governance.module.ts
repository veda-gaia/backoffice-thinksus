import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SupportBoardComponent } from "./support-board/support-board.component";
import { RoadmapComponent } from "./roadmap/roadmap.component";
import { GovernanceDocsComponent } from "./governance-docs/governance-docs.component";

const routes: Routes = [
  { path: "support", component: SupportBoardComponent },
  { path: "roadmap", component: RoadmapComponent },
  { path: "docs", component: GovernanceDocsComponent },
  { path: "", redirectTo: "support", pathMatch: "full" },
];

@NgModule({
  declarations: [
    SupportBoardComponent,
    RoadmapComponent,
    GovernanceDocsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GovernanceModule {}
