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
    this.selectedUsers = this.users;
    console.log(this.selectedUsers);
    
  }

  onUserIdSelect(event:any, user: User) {
    console.log(event.target.checked);

    if(event.target.checked) {
        this.selectedUsers.push(user);
    } else {
      this.selectedUsers = this.selectedUsers.filter(item => item.id !== user.id);
    }
    
    console.log(this.selectedUsers);
    


  }
}
