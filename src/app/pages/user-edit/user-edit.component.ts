import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserRegisterRequestDto } from 'src/app/interfaces/user/user-register-request.dto';
import { FuncionalityPermission } from 'src/app/interfaces/user/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  userForm!: FormGroup;
  @Input() userId!: string;

  permissions = [
    { id: 1, label: 'Dashboard' },
    { id: 2, label: 'Documentos' },
    { id: 3, label: 'Usuários' },
    { id: 4, label: 'Formulários' },
  ];

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      funcionalitypermissions: this.fb.array([]),
      status: [null, Validators.required],
    });

    if (this.userId) {
      this.userService.getUserBackofficeById(this.userId).subscribe({
        next: (user) => {
          this.userForm.patchValue({
            id: user._id,
            name: user.name,
            email: user.email,
            status: user.active,
          });

          const checkArray = this.userForm.get(
            'funcionalitypermissions',
          ) as FormArray;

          user.funcionalitypermissions.forEach(
            (perm: FuncionalityPermission) => {
              checkArray.push(this.fb.control(perm));
            },
          );
        },
        error: (err) => {
          console.error('Erro ao carregar usuário:', err);
          alert('Erro ao carregar os dados do usuário.');
          this.closeModal();
        },
      });
    }
  }

  onCheckboxChange(e: any) {
    const checkArray = this.userForm.get(
      'funcionalitypermissions',
    ) as FormArray;
    const value = +e.target.value;

    if (e.target.checked) {
      checkArray.push(this.fb.control(value));
    } else {
      const index = checkArray.controls.findIndex((x) => x.value === value);
      if (index !== -1) {
        checkArray.removeAt(index);
      }
    }
  }

  onSubmit() {
    if (this.userForm.invalid) return;

    const formValue = this.userForm.value;

    const dto: UserRegisterRequestDto = {
      user: {
        id: formValue.id,
        name: formValue.name,
        email: formValue.email,
        active: formValue.status,
        funcionalitypermissions: formValue.funcionalitypermissions,
      },
      lang: 'pt-BR',
    };

    this.userService.registerUserBackoffice(dto).subscribe({
      next: () => this.activeModal.close('updated'),
      error: (err) => {
        console.error('Erro ao registrar usuário:', err);
        alert('Erro ao salvar usuário. Verifique os dados e tente novamente.');
      },
    });
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
