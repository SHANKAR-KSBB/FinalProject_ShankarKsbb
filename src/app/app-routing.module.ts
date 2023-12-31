import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialUIComponent } from './material-ui/material-ui.component';

const routes: Routes = [
                        {path: 'login', component: LoginComponent},
                        {path:'dashboard',component:DashboardComponent},
                        {path:'materialuidemo',component:MaterialUIComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
