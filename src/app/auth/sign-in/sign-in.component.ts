import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService : AuthService, private spinnerService : Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }

  onSubmit(loginForm : NgForm){
    this.spinnerService.show();
    this.authService.signInUser(loginForm.form.value.userId, loginForm.form.value.userPassword);
  } 

}
