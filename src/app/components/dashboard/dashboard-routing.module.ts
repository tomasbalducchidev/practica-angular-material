import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'usuarios', component: UsersComponent },
      { path: 'reportes', component: ReportsComponent },
      { path: 'crear-usuario', component: CreateUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
