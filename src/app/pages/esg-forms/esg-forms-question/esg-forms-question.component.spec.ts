import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgFormsQuestionComponent } from './esg-forms-question.component';

describe('EsgFormsQuestionComponent', () => {
  let component: EsgFormsQuestionComponent;
  let fixture: ComponentFixture<EsgFormsQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsgFormsQuestionComponent]
    });
    fixture = TestBed.createComponent(EsgFormsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
