import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgFormsEditComponent } from './esg-forms-edit.component';

describe('EsgFormsEditComponent', () => {
  let component: EsgFormsEditComponent;
  let fixture: ComponentFixture<EsgFormsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsgFormsEditComponent]
    });
    fixture = TestBed.createComponent(EsgFormsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
