import { Component, OnInit, isDevMode } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
      firebase.initializeApp({
        apiKey: isDevMode() ? environment.FireBase_API_KEY : process.env.FireBase_API_KEY,
        authDomain: isDevMode() ? environment.FireBase_Auth_Domain : process.env.FireBase_Auth_Domain
      });
    }

}
