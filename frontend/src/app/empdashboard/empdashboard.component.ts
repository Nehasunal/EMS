import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { CommonModule } from "@angular/common";
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  constructor( private userService: UserService,
  private router:Router,
private route: ActivatedRoute) { }

public employees;//local variable
  ngOnInit(){
    this.getCurrentData(this.route.snapshot.params.id);
  }

  getCurrentData(id){
    this.userService.getCurrentData(this.route.snapshot.params.id)
    .subscribe((result)=>{
      console.log(this.route.snapshot.params.id)

    })

  }
}
