import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { CommonModule } from "@angular/common";
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor( private userService: UserService,
  private router:Router,
private route: ActivatedRoute) { }


// public User: string[]=[];
// employees: User[]=[];
public employees=[];//local variable
  ngOnInit(){
    this.getEmployees();
  }

  getEmployees(){
     this.userService
        .getEmployees()
        .subscribe(data => console.log(this.employees = data));


  }

  // getUsers(){
  //   this.userService
  //      .getUsers()
  //      .subscribe(data => {
  //   this.data.push(data);
  //   console.log(this.data);
  //
  //
  //   }, error => console.error(error));
  // }

  deleteUser(id){
    this.userService
      .deleteUser(id)
      .subscribe((res)=> this.getEmployees());



}




}
