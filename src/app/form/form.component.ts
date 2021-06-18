import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() personCreate = new EventEmitter<Person>();
  // nameInput: string = '';
  // lastnameInput: string = '';
  storePerson(nameRef: HTMLInputElement, lastnameRef: HTMLInputElement) {
    // let person = new Person(this.nameInput, this.lastnameInput);
    let person = new Person(nameRef.value, lastnameRef.value);
    this.personCreate.emit(person);
  }
}
