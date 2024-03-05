import { Component, inject } from '@angular/core';
import { User } from '../../model/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  selectedUser!: User;
  userService = inject(UserService);
  objectArray: any = [];
  
  ngOnInit() {
    this.userService.OnUserDetailsClicked.subscribe((user: User) => {
      this.selectedUser = user;
      this.objectArray = Object.entries(this.selectedUser);
    });
  }
}
