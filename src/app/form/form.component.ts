import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() personCreate = new EventEmitter<Person>();
  nameInput: string = '';
  lastnameInput: string = '';
  storePerson() {
    let person = new Person(this.nameInput, this.lastnameInput);
    this.personCreate.emit(person);
  }
}
