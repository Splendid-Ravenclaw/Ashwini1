import { Component } from '@angular/core';
import { ProductInfoService } from './Services/product-info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
  products:any;
  constructor(private productinfo:ProductInfoService)
  {
    productinfo.products().subscribe((data)=>{
      console.warn("data",data);
      this.products=data
    });
  }

}
