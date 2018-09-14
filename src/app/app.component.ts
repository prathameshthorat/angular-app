import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCjdiCg7ozKhyLZqSh8zuJe58m6Awcn5Ig",
      authDomain: "mybankapp-1f03c.firebaseapp.com"
    });
  }

}
