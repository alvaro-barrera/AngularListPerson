import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  persons: Person[] = [
    new Person('Álvaro', 'Barrera'),
    new Person('Juan', 'Perez'),
  ];

  greeting = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {}

  storePerson(person: Person) {
    this.persons.push(person);
    this.loggingService.sendMessageToConsole(
      `Persona agregada al arreglo: ${person.name}`
    );
  }
  findPerson(index:number){
    let person: Person = this.persons[index];
    return person;
  }
  updatePerson(index:number,person:Person){
    let personIndex: Person = this.persons[index];
    personIndex.name = person.name;
    personIndex.lastname = person.lastname;
  }
}
