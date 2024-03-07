import { Component, inject } from '@angular/core';
import { User } from '../../model/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  selectedUsers: User[] = [];
  isSingleSelection: boolean = false;
  objectArray: any = [];
  
  userService = inject(UserService);
  ngOnInit() {
    this.userService.OnUserDetailsClicked.subscribe(({ users, isSingle }) => {
      this.selectedUsers = users;
      this.isSingleSelection = isSingle;
      if (isSingle) {
        this.objectArray = Object.entries(this.selectedUsers[0]);
      } else {
        this.objectArray = []; 
      }
    });
  }
  }

