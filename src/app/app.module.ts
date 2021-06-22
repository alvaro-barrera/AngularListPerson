import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonComponent } from './persons/person/person.component';
import { FormComponent } from './persons/form/form.component';
import { LoggingService } from './LoggingService.service';
import { PersonsService } from './persons.service';
import { PersonsComponent } from './persons/persons.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, PersonComponent, FormComponent, PersonsComponent, ErrorComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [LoggingService, PersonsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
