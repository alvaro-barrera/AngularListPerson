import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Input() i: number;

  constructor() {}

  ngOnInit(): void {}
}
