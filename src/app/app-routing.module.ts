import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './persons/form/form.component';
import { PersonsComponent } from './persons/persons.component';


const routes: Routes = [
  {path: "", component: PersonsComponent},
  {path: "persons", component: PersonsComponent, children:[
    {path: "create", component: FormComponent},
    {path: ":id", component: FormComponent}
  ]},
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
