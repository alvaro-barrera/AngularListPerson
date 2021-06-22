import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PersonComponent } from './persons/person/person.component';
import { FormComponent } from './persons/form/form.component';
import { LoggingService } from './LoggingService.service';
import { PersonsService } from './persons.service';
import { PersonsComponent } from './persons/persons.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [AppComponent, PersonComponent, FormComponent, PersonsComponent, ErrorComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [LoggingService, PersonsService, DataServices,LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
