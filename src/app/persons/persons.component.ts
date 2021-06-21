import { Component, OnInit } from '@angular/core';
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
    private personsService: PersonsService
  ) {
    this.personsService.greeting.subscribe((index: number) =>
      alert(`El índice es: ${index}`)
    );
  }

  ngOnInit() {
    this.persons = this.personsService.persons;
  }

  personStored(person: Person) {
    this.personsService.addPerson(person);
  }

}
