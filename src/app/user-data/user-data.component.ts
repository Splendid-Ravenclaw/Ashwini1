import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {

  constructor(private route:ActivatedRoute) {}

  userId:any='';
  ngOnInit(): void{
    console.warn("user-data id is",this.route.snapshot.paramMap.get('id'));   //why id bcaz we when we pass routing we pass user-data/:id (we can give no also)
    this.userId = this.route.snapshot.paramMap.get('id')
  }

}
