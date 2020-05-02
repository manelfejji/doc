import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width:'600px',

    
      panelClass:  "myclass",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  openDialog2(): void {
    let dialogRef = this.dialog.open(SignupComponent, {
      width:'1000px',

    
      panelClass:  "myclass",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
