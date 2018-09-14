import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MakeATransferComponent } from './make-a-transfer/make-a-transfer.component';

const mainRoutes : Routes = [
  { path : '' ,  pathMatch : "full" , redirectTo : "/login" },
  { path : 'login' , loadChildren : "./auth/auth.module#authModule" },
  { path : 'home', component : MakeATransferComponent }
]

@NgModule({
  imports : [ RouterModule.forRoot(mainRoutes)],
  exports : [ RouterModule ]
})

export class AppRoutingModule { 

}
