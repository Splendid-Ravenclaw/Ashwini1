import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-user',
  templateUrl: './list-of-user.component.html',
  styleUrl: './list-of-user.component.css'
})
export class ListOfUserComponent {
  constructor(){
    console.warn("User loaded");
  }
}
