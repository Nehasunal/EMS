import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormsModule, FormControl, FormBuilder, FormGroup, FormArray,  Validators, ValidatorFn, AbstractControl } from '@angular/forms';


import { AlertsService } from 'angular-alert-module';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { AdmindashboardComponent } from '../../admindashboard/admindashboard.component';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
              private userService: UserService,
              private router: Router) { }

  ngOnInit(){
  }
  model = new User();
    addUser(){
        this.userService
          .addUser(this.model)
          .subscribe(()=> this.goBack());
    }
     goBack(){
      this.router.navigate(['/admindashboard']);
    }


}
