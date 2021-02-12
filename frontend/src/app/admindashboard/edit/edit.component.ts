import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormsModule, FormControl, FormBuilder, FormGroup, FormArray,  Validators, ValidatorFn, AbstractControl } from '@angular/forms';


import { AlertsService } from 'angular-alert-module';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { AdmindashboardComponent } from '../../admindashboard/admindashboard.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
editEmp= new FormGroup({
  username: new FormControl(''),
    email: new FormControl(''),
      title: new FormControl(''),
      department: new FormControl(''),
      salary: new FormControl(''),

})

  constructor(
    private router: Router,
      private route: ActivatedRoute,
  private userService: UserService
  ) { }



  ngOnInit(){
     this.userService.getCurrentData(this.route.snapshot.params.id)
     .subscribe((result)=>{
       console.log(this.route.snapshot.params.id)
       this.editEmp= new FormGroup({
         username: new FormControl('',Validators.required),
           email: new FormControl('', Validators.email),
             title: new FormControl(''),
             department: new FormControl(''),
             salary: new FormControl(''),

       })
     })


   }//ng



updateEmployee(){
  this.userService.updateEmployee(this.route.snapshot.params.id,this.editEmp.value)
  .subscribe((result)=>{
    console.log(result,"data updated");
    this.router.navigate(['admindashboard']);
  })
}

// model:User;
// id:number;
//
// ngOnInit(){
//   this.model=new User();
//   this.id = this.route.snapshot.params['id'];
//
//   this.userService.getCurrentData(this.id)
//        .subscribe(data => {
//
//          this.model = data[0];
//        }, error => console.log(error));
//    }
//
//    updateEmployee() {
//        this.userService.updateEmployee(this.id, this.model)
//          .subscribe(data => {
//
//            this.goBack();
//          }, error => console.log(error));
//      }
//
//
//        onSubmit() {
//          this.updateEmployee();
//        }
//
       goBack() {
         this.router.navigate(['/admindashboard']);
       }





}
