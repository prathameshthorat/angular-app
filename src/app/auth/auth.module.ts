import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent, HeaderComponent, SignInComponent],
  providers : [AuthService],
  bootstrap: [ AuthComponent ] 
})

export class AuthModule {
  
 }
