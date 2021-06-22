import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  persons: Person[] = [];

  greeting = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
    private dataService: DataService) {}

  setPersons(persons: Person[]){
    this.persons = persons;
  }

  getPersons(){
    return this.dataService.getPersons();
  }
  storePerson(person: Person) {
    if(this.persons == null){
      this.persons = [];
    }
    this.persons.push(person);
    this.dataService.storePerson(this.persons);
  }
  findPerson(index:number){
    let person: Person = this.persons[index];
    return person;
  }
  updatePerson(index:number,person:Person){
    let personIndex: Person = this.persons[index];
    personIndex.name = person.name;
    personIndex.lastname = person.lastname;
    this.dataService.updatePerson(index,person);
  }
  deletePerson(index:number){
    this.persons.splice(index,1);
    this.dataService.deletePerson(index);
    this.updatePersons();
  }

  updatePersons(){
    if(this.persons != null){
      this.dataService.storePerson(this.persons);
    }
  }
}
