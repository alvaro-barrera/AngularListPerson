import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('nameRef') nameRef: ElementRef;
  @ViewChild('lastnameRef') lastnameRef: ElementRef;

  storePerson() {
    // let person = new Person(this.nameInput, this.lastnameInput);
    let person = new Person(
      this.nameRef.nativeElement.value,
      this.lastnameRef.nativeElement.value
    );
    this.personCreate.emit(person);
  }
}
