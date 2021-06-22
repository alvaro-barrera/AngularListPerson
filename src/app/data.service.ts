import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Person } from "./person.model";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class DataServices{
  baseUrl: string = "https://contactscheduleapp-default-rtdb.firebaseio.com/datos.json";
  constructor(private httpClient: HttpClient,
    private loggingService: LoggingService){
  }

  getPersons(){
    return this.httpClient.get(`${this.baseUrl}`);
  }

  storePerson(persons: Person[]){
    this.httpClient.put(`${this.baseUrl}`,persons)
    .subscribe(
      response => this.loggingService.sendMessageToConsole(`Guardar personas ${response}`),
      error => this.loggingService.sendMessageToConsole(`Error guardar persons ${error}`)
    );
  }

  updatePerson(index:number, person: Person){
    let url: string;
    url = `https://contactscheduleapp-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpClient.put(url, person)
    .subscribe(
      response => this.loggingService.sendMessageToConsole(`Modificar persona ${response}`),
      error => this.loggingService.sendMessageToConsole(`Error modificar persona: ${error}`)
    )
  }

  deletePerson(index:number){
    let url: string;
    url = `https://contactscheduleapp-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpClient.delete(url)
    .subscribe(
      response => this.loggingService.sendMessageToConsole(`Eliminar persona ${response}`),
      error => this.loggingService.sendMessageToConsole(`Error eliminar persona: ${error}`)
    )
  }
}