import { Component } from '@angular/core';
import { MemberdataService } from '../Services/memberdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // member()
  // {
  //   return[
  
  //     {name:'Ashwini',age:23,email:'ashiwni@test.com',phone:2343451232},
  //     {name:'Kumud',age:34,email:'kumud@test.com',phone:784345672},
  //     {name:'Kritika',age:24,email:'kritika@test.com',phone:9032456784},
  //   ]
  // }
  member:any;
    constructor (private memberdata:MemberdataService)
    {
      memberdata.member().subscribe((data)=>{
        console.warn("data",data);
        this.member=data
    });
    }
}
