import {
  Component,
  ElementRef,
  // EventEmitter,
  OnInit,
  // Output,
  ViewChild,
} from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Person } from '../person.model';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // @Output() personCreate = new EventEmitter<Person>();
  nameInput: string = '';
  lastnameInput: string = '';
  // @ViewChild('nameRef') nameRef: ElementRef;
  // @ViewChild('lastnameRef') lastnameRef: ElementRef;

  constructor(
    private logginService: LoggingService,
    private personsService: PersonsService
  ) {}
  ngOnInit() {}

  storePerson() {
    let person = new Person(this.nameInput, this.lastnameInput);
    // let person = new Person(
    //   this.nameRef.nativeElement.value,
    //   this.lastnameRef.nativeElement.value
    // );
    // this.logginService.sendMessageToConsole(
    //   `Persona enviada: ${person.name} ${person.lastname}`
    // );
    // this.personCreate.emit(person);
    this.personsService.addPerson(person);
  }
}
