import { Component, inject } from '@angular/core';
import { User } from '../../model/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  selectedUser:  User | null = null;

  
  userService = inject(UserService);
  ngOnInit() {
    this.userService.OnUserDetailsClicked.subscribe(( user) => {
      this.selectedUser = user;
    });
  }
  }

