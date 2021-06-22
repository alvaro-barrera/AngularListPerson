import { ifStmt } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  ElementRef,
  // EventEmitter,
  OnInit,
  // Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Person } from '../../person.model';
import { PersonsService } from '../../persons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // @Output() personCreate = new EventEmitter<Person>();
  nameInput: string = '';
  lastnameInput: string = '';
  index: number;
  editionMode: number;

  // @ViewChild('nameRef') nameRef: ElementRef;
  // @ViewChild('lastnameRef') lastnameRef: ElementRef;

  constructor(
    private logginService: LoggingService,
    private personsService: PersonsService,
    private router:Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.index = this.route.snapshot.params["id"];
    this.editionMode = +this.route.snapshot.queryParams["editionMode"];
    if(this.editionMode != null && this.editionMode ===1){
      // if(this.index){
      let person: Person = this.personsService.findPerson(this.index);
      this.nameInput = person.name;
      this.lastnameInput = person.lastname;
    }
  }

  handleSavePerson() {
    let person = new Person(this.nameInput, this.lastnameInput);
    // let person = new Person(
    //   this.nameRef.nativeElement.value,
    //   this.lastnameRef.nativeElement.value
    // );
    // this.logginService.sendMessageToConsole(
    //   `Persona enviada: ${person.name} ${person.lastname}`
    // );
    // this.personCreate.emit(person);
    // if(this.index){
    if(this.editionMode != null && this.editionMode ===1){
      this.personsService.updatePerson(this.index, person);
    }else{
      this.personsService.storePerson(person);
    }
    this.router.navigate(["persons"]);
  }
  deletePerson(){
    if(this.index != null){
      this.personsService.deletePerson(this.index);
    }
    this.router.navigate(["persons"]);
  }
}
