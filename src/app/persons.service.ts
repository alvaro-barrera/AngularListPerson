import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  persons: Person[] = [
    new Person('Álvaro', 'Barrera'),
    new Person('Juan', 'Perez'),
  ];

  greeting = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
    private dataServices: DataServices) {}

  storePerson(person: Person) {
    this.persons.push(person);
    this.loggingService.sendMessageToConsole(`Persona agregada al arreglo: ${person.name}`);
    this.dataServices.savePersons(this.persons);

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
  deletePerson(index:number){
    this.persons.splice(index,1);
  }
}
