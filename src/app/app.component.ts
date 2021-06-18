import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularListPersonApp';
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
