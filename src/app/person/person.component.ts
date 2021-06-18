import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Input() i: number;

  constructor(private personsService: PersonsService) {}

  ngOnInit(): void {}
  emitGreeting() {
    this.personsService.greeting.emit(this.i);
  }
}
