import { Component } from '@angular/core';
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
  nameInput: string = '';
  lastnameInput: string = '';
  storePerson() {
    let person = new Person(this.nameInput, this.lastnameInput);
    this.persons.push(person);
  }
}
