import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomText:string= lorem.sentence();
  isIdentical = false;
  enteredText = "";
  onInput = (value:string)=>{
    this.enteredText = value;
  }

  
}
