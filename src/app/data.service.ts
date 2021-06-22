import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Person } from "./person.model";

@Injectable()
export class DataServices{
  baseUrl: string = "https://contactscheduleapp-default-rtdb.firebaseio.com/datos.json";
  constructor(private httpClient: HttpClient,
    private loggingService: LoggingService){
  }

  savePersons(persons: Person[]){
    this.httpClient.put(`${this.baseUrl}`,persons)
    .subscribe(
      response => this.loggingService.sendMessageToConsole(`Guardar personas ${response}`),
      error => this.loggingService.sendMessageToConsole(`Error guardar persons ${error}`)
    );
  }
}
