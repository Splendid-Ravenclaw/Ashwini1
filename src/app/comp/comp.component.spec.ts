import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompComponent } from './comp.component';

describe('CompComponent', () => {
  let component: CompComponent;
  let fixture: ComponentFixture<CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check component name', () => {
    expect(component.componentName).toBe("comp");
  });
  it('check component function', () => {
    expect(component.sum()).toBe(100);   //if this 100 not match then test case is fail
  });
});
