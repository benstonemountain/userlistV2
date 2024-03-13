import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, UserIdState } from '../../model/user.interface';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  userIdStates: UserIdState[] = [];
  
  filteredUsers: User[] | undefined = [];
  textByUser = '';
  selectedUsers: Set<UserIdState> = new Set();

  constructor(private userService: UserService) {}

  
  usersFromServer$!: Observable<UserIdState[]>;
  ngOnInit() {
    this.userService.getRequest();
    this.usersFromServer$ = this.userService.getAllUser().pipe(tap(
      console.log
    ))
  }

  // onSearch() {
  //   if (this.textByUser.length >= 3) {
  //     this.filteredUsers = this.userIdStates.filter((item) =>
  //       item.id.toLowerCase().includes(this.textByUser.toLowerCase())
  //     );
  //   } else if (this.textByUser.length <= 2 && this.textByUser.length > 0) {
  //     this.filteredUsers = this.userIdStates;
  //   }
  // }

  selectAllCheckboxes() {
    this.userService.getSelectedUser(null);
    if (this.selectedUsers.size === this.userIdStates.length) {
      this.selectedUsers.clear();
    } else {
      this.userIdStates.forEach((item) => this.selectedUsers.add(item));
    }
  }

  onUserSelect(event: any, userIdState: UserIdState) {
    if (event.target.checked) {
      this.selectedUsers.add(userIdState);
    } else {
      this.selectedUsers.delete(userIdState);
    }

    if (this.selectedUsers.size === 1) {
      //firstElement: a set első elemét adja vissza
      const firstElement = Array.from(this.selectedUsers)[0];
      this.userService.getSelectedUser(userIdState.SSI);
    } else {
      this.userService.getSelectedUser(null);
    }
  }




}
