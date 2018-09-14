import { Injectable } from '@angular/core';
import * as fireBase from 'firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class AuthService {
  authResponse : Observable<any>;

  constructor( private router : Router, private spinnerService : Ng4LoadingSpinnerService){

  }

  signInUser( email : string, password : string) {
    fireBase.auth().signInWithEmailAndPassword(email, password).then(
      (response) => {
        this.spinnerService.hide();
        this.router.navigate(['home']);
        console.log(response);
      }
       
    );
  }

}
