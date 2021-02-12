import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
// import { AuthGuard } from './auth.guard';

import { AlertsModule } from 'angular-alert-module';
// import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AddComponent } from './admindashboard/add/add.component';
import { EditComponent } from './admindashboard/edit/edit.component';
import { NavbarComponent } from './admindashboard/navbar/navbar.component';
import { EditempComponent } from './empdashboard/editemp/editemp.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    EmpdashboardComponent,
    AddComponent,
    EditComponent,

    NavbarComponent,
    EditempComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertsModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
