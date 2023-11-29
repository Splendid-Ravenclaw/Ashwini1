import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTemplateComponent } from './in-template.component';

describe('InTemplateComponent', () => {
  let component: InTemplateComponent;
  let fixture: ComponentFixture<InTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
