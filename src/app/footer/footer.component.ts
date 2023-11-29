import { Component } from '@angular/core';
import { MemberdataService } from '../Services/memberdata.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  arr:any;
  constructor(private memberdata:MemberdataService)
  {
    console.warn("memberdata",memberdata.memberData);
    this.arr=memberdata.memberData();
  }
}
