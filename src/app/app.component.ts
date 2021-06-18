import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularListPersonApp';
  persons: Person[] = [
    new Person('Álvaro', 'Barrera'),
    new Person('Juan', 'Perez'),
  ];

  constructor(private logginService: LoggingService) {}
  personStored(person: Person) {
    this.persons.push(person);
    this.logginService.sendMessageToConsole(
      `Persona agregada al arreglo: ${person.name}`
    );
  }
}
