import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';

import { Observable, Subscription, Subject, asapScheduler, pipe, of, from } from 'rxjs';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap, filter, scan } from 'rxjs/operators';

import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  readonly baseURL = 'http://localhost:3000/api/';




  constructor( private http: HttpClient, private router: Router ) { }



checkMe:any;
  loginUser(body: any) {
     return this.http.post(this.baseURL + 'login', body, { observe: 'body'});
    }

    addUser(info){
      return this.http.post(this.baseURL + 'add',info)
        .pipe(map(()=>""));
    }

/////////
//
// getEmployees(){
//     return this.http.get(this.baseURL + 'select')
//       .pipe(map((res:Response)=>res.json()));
//   }

  getEmployees(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'select')
    // .map((res:Response) => res.json());
     // .pipe(map(()=>res.json()));

      }

getCurrentData(id){
  return this.http.get(this.baseURL + 'selectone' +'/'+id)
// .pipe(map(res:Response) => res.json())
}
  deleteUser(id){
      return this.http.delete(this.baseURL + 'delete'+ '/' + id)
      // .pipe(map(()=>this.getEmployees()));

    }

    updateEmployee(id,info){
      return this.http.put(this.baseURL + 'update/'+id,info)
        // .pipe(map(()=>""));
    }


}//end
