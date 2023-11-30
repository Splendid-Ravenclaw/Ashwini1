import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-admin',
  templateUrl: './list-of-admin.component.html',
  styleUrl: './list-of-admin.component.css'
})
export class ListOfAdminComponent {
  constructor(){
    console.warn("Admin loaded");
  }
}
