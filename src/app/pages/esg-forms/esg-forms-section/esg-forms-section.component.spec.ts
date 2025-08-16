import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsgFormsSectionComponent } from './esg-forms-section.component';

describe('EsgFormsSectionComponent', () => {
  let component: EsgFormsSectionComponent;
  let fixture: ComponentFixture<EsgFormsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsgFormsSectionComponent],
    });
    fixture = TestBed.createComponent(EsgFormsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
