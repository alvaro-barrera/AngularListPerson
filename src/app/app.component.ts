import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'AngularListPersonApp';
}
