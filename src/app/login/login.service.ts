import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase";
import { LoggingService } from "../LoggingService.service";

@Injectable()
export class LoginService{
  token:string;

  constructor(private router:Router,
    private loggingService: LoggingService){

  }

  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        firebase.auth().currentUser?.getIdToken()
        .then(token => {
          this.token = token;
          this.router.navigate(["/"]);
        })
      }
    );
  }

  getIdToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null && this.token != "";
  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.token = "";
      this.router.navigate(["login"])
    }).catch(error => this.loggingService.sendMessageToConsole(`Error de logout ${error}`))
  }
}
