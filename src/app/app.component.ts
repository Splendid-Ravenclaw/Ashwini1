import { Component } from '@angular/core';
import { MemberdataService } from './Services/memberdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rounting-practice';
  arr:any;
  constructor(private memberdata:MemberdataService)
  {
    console.warn("memberdata",memberdata.memberData);
    this.arr=memberdata.memberData();
  }
}
