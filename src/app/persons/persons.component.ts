import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Person } from '../person.model';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private logginService: LoggingService,
    private personsService: PersonsService,
    private router: Router
  ) {
    this.personsService.greeting.subscribe((index: number) =>
      alert(`El índice es: ${index}`)
    );
  }

  ngOnInit() {
    this.personsService.getPersons()
    .subscribe(
      (persons:any ) => {
        this.persons = persons;
        this.personsService.setPersons(persons);
      }
    );
  }

  personStored(person: Person) {
    this.personsService.storePerson(person);
  }
  newRegister(){
    this.router.navigate(["persons/create"]);
  }

}
