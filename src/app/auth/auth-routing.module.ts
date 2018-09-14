import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

const authRoutes : Routes = [
   { path : '', component : SignInComponent },
   { path : 'login', component : SignInComponent  }
]

@NgModule({
  imports : [ RouterModule.forChild(authRoutes)],
  exports : [ RouterModule ]
})
export class AuthRoutingModule { }
