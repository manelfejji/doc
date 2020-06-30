import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

    ngOnInit() {}

    openDialog(): void{
      let dialogRef=
      this.dialog.open(LoginComponent,{
        width:"500px", height:"500px",
        panelClass: "myclass",
      })
      dialogRef.afterClosed().subscribe(result=>{
        console.log('the dialog was closed');
      })
    }
}