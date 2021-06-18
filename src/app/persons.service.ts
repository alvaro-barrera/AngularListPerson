import { Person } from './person.model';

export class PersonsService {
  persons: Person[] = [
    new Person('Álvaro', 'Barrera'),
    new Person('Juan', 'Perez'),
  ];

  addPerson(person: Person) {
    this.persons.push(person);
    // this.logginService.sendMessageToConsole(
    //   `Persona agregada al arreglo: ${person.name}`
    // );
  }
}
