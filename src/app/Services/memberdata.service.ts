import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberdataService {

  constructor() { }
  memberData()
  {
    return[
  
      {name:'Ashwini',age:23,email:'ashiwni@test.com',phone:2343451232},
      {name:'Kumud',age:34,email:'kumud@test.com',phone:784345672},
      {name:'Kritika',age:24,email:'kritika@test.com',phone:9032456784},
    ]
  }
  
}
