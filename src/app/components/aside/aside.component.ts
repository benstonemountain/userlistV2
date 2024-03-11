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

  selectedUsers: Set<User> = new Set();

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
    if (this.selectedUsers.size === this.users.length) {
      this.selectedUsers.clear();
    } else {
      this.users.forEach((item) => this.selectedUsers.add(item));
    }
  }

  onUserSelect(event: any, user: User) {
    if (event.target.checked) {
      this.selectedUsers.add(user);
    } else {
      this.selectedUsers.delete(user);
    }
    console.log(this.selectedUsers);
  }
}
