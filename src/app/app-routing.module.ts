import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./pages/login/login.component";
import { UserManagementComponent } from "./pages/user-manegement/user-manegement.component";
import { DocumentVerificationComponent } from "./pages/document-verification/document-verification.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },

  {
    path: "",
    canActivateChild: [AuthGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "user-management", component: UserManagementComponent },
      {
        path: "document-verification",
        component: DocumentVerificationComponent,
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./pages/esg-forms/esg-forms.module").then(
            (m) => m.EsgFormsModule
          ),
      },
      { path: "", redirectTo: "/login", pathMatch: "full" },
    ],
  },

  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
