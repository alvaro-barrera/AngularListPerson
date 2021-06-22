import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  persons: Person[] = [];

  greeting = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
    private dataServices: DataServices) {}

  setPersons(persons: Person[]){
    this.persons = persons;
  }

  getPersons(){
    return this.dataServices.getPersons();
  }
  storePerson(person: Person) {
    if(this.persons == null){
      this.persons = [];
    }
    this.persons.push(person);
    this.dataServices.storePerson(this.persons);
  }
  findPerson(index:number){
    let person: Person = this.persons[index];
    return person;
  }
  updatePerson(index:number,person:Person){
    let personIndex: Person = this.persons[index];
    personIndex.name = person.name;
    personIndex.lastname = person.lastname;
    this.dataServices.updatePerson(index,person);
  }
  deletePerson(index:number){
    this.persons.splice(index,1);
    this.dataServices.deletePerson(index);
    this.updatePersons();
  }

  updatePersons(){
    if(this.persons != null){
      this.dataServices.storePerson(this.persons);
    }
  }
}
