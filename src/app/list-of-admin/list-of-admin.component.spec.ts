import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAdminComponent } from './list-of-admin.component';

describe('ListOfAdminComponent', () => {
  let component: ListOfAdminComponent;
  let fixture: ComponentFixture<ListOfAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
