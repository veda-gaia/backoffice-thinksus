import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgFormsComponent } from './esg-forms.component';

describe('EsgFormsComponent', () => {
  let component: EsgFormsComponent;
  let fixture: ComponentFixture<EsgFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsgFormsComponent]
    });
    fixture = TestBed.createComponent(EsgFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
