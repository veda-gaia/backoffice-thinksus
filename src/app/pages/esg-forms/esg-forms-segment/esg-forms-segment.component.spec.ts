import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsgFormsSegmentComponent } from './esg-forms-segment.component';

describe('EsgFormsSectionComponent', () => {
  let component: EsgFormsSegmentComponent;
  let fixture: ComponentFixture<EsgFormsSegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsgFormsSegmentComponent],
    });
    fixture = TestBed.createComponent(EsgFormsSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
