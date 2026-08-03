import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserManagementComponent } from './user-manegement.component';
import { UserService } from 'src/app/services/user.service';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementComponent],
      providers: [
        {
          provide: UserService,
          useValue: { listUsersBackoffice: () => of([]) },
        },
        { provide: NgbModal, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
