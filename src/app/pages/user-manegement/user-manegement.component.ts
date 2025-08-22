import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  FuncionalityPermission,
  UserInterface,
} from 'src/app/interfaces/user/user.interface';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-manegement',
  templateUrl: './user-manegement.component.html',
  styleUrls: ['./user-manegement.component.scss'],
})
export class UserManagementComponent implements AfterViewInit, OnInit {
  filteredList: any[] = [];
  loading = true;
  displayedColumns: string[] = [
    'useractive',
    'name',
    'email',
    'permissoes',
    'acoes',
  ];
  dataSource = new MatTableDataSource<UserInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.updateUsers();
  }

  updateUsers(): void {
    this.userService.listUsersBackoffice().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<UserInterface>(data);
      },
    });
  }

  openUserEditModal(userId: number): void {
    const dialogUser = this.modalService.open(UserEditComponent);
    dialogUser.componentInstance.userId = userId;
    dialogUser.result.then((result) => {
      if (result === 'updated') {
        this.updateUsers();
      }
    });
  }

  getEnumNames(permissionIds: number[]): string {
    return permissionIds.map((id) => FuncionalityPermission[id]).join('\n');
  }
}
