import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InStyleComponent } from './in-style.component';

describe('InStyleComponent', () => {
  let component: InStyleComponent;
  let fixture: ComponentFixture<InStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
