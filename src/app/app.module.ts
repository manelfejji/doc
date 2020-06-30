import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DocRegisterComponent } from './doc-register/doc-register.component';

import { PatientComponent } from './patient/patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule, MatButtonModule} from '@angular/material';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    RegisterComponent,
   
    
    DocRegisterComponent,
   
    
  
   
    
    PatientComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule ,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  

 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
