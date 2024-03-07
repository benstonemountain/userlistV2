import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  users: User[] = [];
  filteredUsers: User[] | undefined = [];
  textByUser = '';
  selectAll: boolean = false;
  selectedUser!: User | undefined;
  selectedUsers: User[] = [];
  canRender = false;

  constructor(private userService: UserService) {
    this.users = this.userService.users;
    this.filteredUsers = this.users;
  }

  onSearch() {
    if (this.textByUser.length >= 3) {
      this.filteredUsers = this.users.filter((item) =>
        item.id.toLowerCase().includes(this.textByUser.toLowerCase())
      );
    } else if (this.textByUser.length <= 2 && this.textByUser.length > 0) {
      this.filteredUsers = this.users;
    }
  }

  selectAllCheckboxes() {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.selectedUsers = this.users;
    } else {
      this.selectedUsers = [];
    }
    console.log(this.selectedUsers);
  }

  onUserSelect(event: any, user: User) {
    if (event.target.checked) {
      this.selectedUsers.push(user);
      if (this.selectedUsers.length === 1) {
        this.userService.getSelectedUser(this.selectedUsers, true);
      } else {
        this.userService.getSelectedUser(this.selectedUsers, false);
      }
      
      // ha nincs bepipálva a checkbox
    } else {
      this.selectedUsers = this.selectedUsers.filter(
        (item) => item.id !== user.id);

      if (this.selectedUsers.length === 1) {
        this.userService.getSelectedUser([this.selectedUsers[0]], true);
      } else {
        this.userService.getSelectedUser(this.selectedUsers, false);
      }
    }
  }
}
