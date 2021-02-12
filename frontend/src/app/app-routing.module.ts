import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { AddComponent } from './admindashboard/add/add.component';
import { EditComponent } from './admindashboard/edit/edit.component';
import {EditempComponent} from './empdashboard/editemp/editemp.component';

const routes: Routes = [
  { path: '',  redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'empdashboard', component: EmpdashboardComponent },
      { path: 'admindashboard', component: AdmindashboardComponent},
    // canActivate: [AuthGuard]},
      {path:'add', component:AddComponent},
      {path:'edit/:id', component:EditComponent},
      {path:'editemp/:id', component:EditempComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
