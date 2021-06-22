import { Component, OnInit } from '@angular/core';
import  firebase from "firebase";
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit{
  title = 'AngularListPersonApp';

  constructor(private loginService: LoginService){}

  ngOnInit():void{
   firebase.initializeApp({
    apiKey: "AIzaSyBKHSgVQeGO5nJs7qQY_Hav5ngXLj5Xdrw",
    authDomain: "contactscheduleapp.firebaseapp.com",
   })
  }

  isAuthenticated(){
    return this.loginService.isAuthenticated();
  }
  logout(){
    this.loginService.logout();
  }
}
