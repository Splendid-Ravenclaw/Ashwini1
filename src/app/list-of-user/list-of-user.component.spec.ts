import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUserComponent } from './list-of-user.component';

describe('ListOfUserComponent', () => {
  let component: ListOfUserComponent;
  let fixture: ComponentFixture<ListOfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});