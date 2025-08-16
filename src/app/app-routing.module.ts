import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { UserManagementComponent } from './pages/user-manegement/user-manegement.component';
import { EsgFormsComponent } from './pages/esg-forms/esg-forms.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'user-management', component: UserManagementComponent },
  {
    path: 'forms',
    loadChildren: () =>
      import('./pages/esg-forms/esg-forms.module').then(
        (m) => m.EsgFormsModule,
      ),
  },
  //{ path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
