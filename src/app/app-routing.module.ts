import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginGuardService } from './login/login-guard.service';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './persons/form/form.component';
import { PersonsComponent } from './persons/persons.component';


const routes: Routes = [
  {path: "", component: PersonsComponent,canActivate:[LoginGuardService]},
  {path: "persons", component: PersonsComponent,canActivate:[LoginGuardService], children:[
    {path: "create", component: FormComponent},
    {path: ":id", component: FormComponent}
  ]},
  {path: "login", component: LoginComponent},
  {path: "**", component: ErrorComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
