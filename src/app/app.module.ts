import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FormComponent } from './form/form.component';
import { LoggingService } from './LoggingService.service';
import { PersonsService } from './persons.service';

@NgModule({
  declarations: [AppComponent, PersonComponent, FormComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [LoggingService, PersonsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
