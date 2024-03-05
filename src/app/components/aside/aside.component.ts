import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  imageSource = 'assets/pics/search_icon.svg';
  users!: User[];
  filteredUsers: User[] = [];
  textByUser = "";


 constructor(private userService: UserService) {
  this.users = this.userService.users;
  }

  ngOnInit() {
    this.filteredUsers = this.users;
  }

  onSearch() {
    this.filteredUsers = this.users.filter(item => item.id.toLowerCase().includes(this.textByUser.toLowerCase()))
  }

 

}
