import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{HomeComponent}from './home/home.component';
import { RegisterComponent } from './register/register.component';

import{ DocRegisterComponent} from'./doc-register/doc-register.component';
import { SearchComponent } from './search/search.component';
import { PatientComponent } from './patient/patient.component';


const routes: Routes = [
  {
    path : 'a' ,component : LoginComponent},
   { path: 'b', component : SignupComponent},
   { path: 'c', component: HomeComponent},
   { path: 'r', component:RegisterComponent},
   { path: 're', component:DocRegisterComponent},
   { path: 's', component:SearchComponent},
   { path:'p', component:PatientComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
