import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InStyleTempComponent } from './in-style-temp.component';

describe('InStyleTempComponent', () => {
  let component: InStyleTempComponent;
  let fixture: ComponentFixture<InStyleTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InStyleTempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InStyleTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
