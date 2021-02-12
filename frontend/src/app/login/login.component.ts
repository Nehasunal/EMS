import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, FormBuilder, FormGroup, FormControl, FormArray,  Validators, AbstractControl } from '@angular/forms';

import {ActivatedRoute, Params, Router} from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { AlertsService } from 'angular-alert-module';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get f() { return this.loginForm.controls; }
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private alerts: AlertsService,
              private route: ActivatedRoute
             ) { }
loginForm: FormGroup;


  ngOnInit(){
    this.loginForm = this.formBuilder.group({
  userName: [null, [Validators.required, Validators.minLength(4)] ],
  password: [null, [Validators.required, Validators.minLength(4)] ],
 // options:[null]
});

      this.alerts.setDefaults('timeout',5);
  }


  onSubmit(loginForm){
    this.userService.loginUser(loginForm.value).subscribe((res) => {
      // console.log(res[0].role +"hel")
// if(loginForm.value.username==='Neha')
       this.router.navigateByUrl('/admindashboard');
//        }
//        else
// this.router.navigateByUrl('/empdashboard');

      },
        err => {

          this.alerts.setMessage ('Login failed ', 'error');
        }
      );

  }

}
