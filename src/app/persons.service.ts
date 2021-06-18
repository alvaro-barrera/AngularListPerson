import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  persons: Person[] = [
    new Person('Álvaro', 'Barrera'),
    new Person('Juan', 'Perez'),
  ];

  constructor(private loggingService: LoggingService) {}

  addPerson(person: Person) {
    this.persons.push(person);
    this.loggingService.sendMessageToConsole(
      `Persona agregada al arreglo: ${person.name}`
    );
  }
}
