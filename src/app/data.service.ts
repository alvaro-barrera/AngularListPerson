import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Person } from "./person.model";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginService } from "./login/login.service";
@Injectable()
export class DataService{
  baseUrl: string = "https://contactscheduleapp-default-rtdb.firebaseio.com/datos.json";
  constructor(private httpClient: HttpClient,
    private loggingService: LoggingService,
    private loginService: LoginService){
  }

  getPersons(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get(`${this.baseUrl}?auth=${token}`);
  }

  storePerson(persons: Person[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put(`${this.baseUrl}?auth=${token}`,persons)
    .subscribe(
      response => this.loggingService.sendMessageToConsole(`Guardar personas ${response}`),
      error => this.loggingService.sendMessageToConsole(`Error guardar persons ${error}`)
    );
  }

  updatePerson(index:number, person: Person){
    const token = this.loginService.getIdToken();
    let url: string;
    url = `https://contactscheduleapp-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.put(url, person)
    .subscribe(
      response => this.loggingService.sendMessageToConsole(`Modificar persona ${response}`),
      error => this.loggingService.sendMessageToConsole(`Error modificar persona: ${error}`)
    )
  }

  deletePerson(index:number){
    const token = this.loginService.getIdToken();
    let url: string;
    url = `https://contactscheduleapp-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.delete(url)
    .subscribe(
      response => this.loggingService.sendMessageToConsole(`Eliminar persona ${response}`),
      error => this.loggingService.sendMessageToConsole(`Error eliminar persona: ${error}`)
    )
  }
}
