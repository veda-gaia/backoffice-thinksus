import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentVerificationDetailComponent } from './document-verification-detail.component';

describe('DocumentVerificationDetailComponent', () => {
  let component: DocumentVerificationDetailComponent;
  let fixture: ComponentFixture<DocumentVerificationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentVerificationDetailComponent]
    });
    fixture = TestBed.createComponent(DocumentVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
