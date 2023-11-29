import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit{
  userId:any;
  constructor (private route:ActivatedRoute){}

  ngOnInit(): void {
    console.warn("user-data id is", this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
