import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  users!: User[];
  filteredUsers: User[] = [];
  textByUser = '';
  selectedUserId: string | null = null;

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

  onUserIdSelect(userId: string) {
    this.selectedUserId = this.selectedUserId === userId ? null : userId;
    console.log(this.selectedUserId);
    if (this.selectedUserId) {
     this.userService.getSelectedUser(this.selectedUserId);
    }
  }


}
