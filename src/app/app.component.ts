import { Component,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing_module';
  constructor(private ViewContainerRef:ViewContainerRef, private cfr:ComponentFactoryResolver ){}
  async loadAdmin()
  {
    this.ViewContainerRef.clear();
    const {ListOfAdminComponent}= await import('./list-of-admin/list-of-admin.component');
    this.ViewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ListOfAdminComponent)
    )
  }
  async loadUser()
  {
    this.ViewContainerRef.clear();
    const {ListOfUserComponent}= await import('./list-of-user/list-of-user.component');
    this.ViewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ListOfUserComponent)
    )


  }
}
