import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../model/user.interface';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 's15734',
      name: 'Piszkos Fred',
      age: 50,
      isLoggedIn: true,
    },
    {
      id: 's02145',
      name: 'Bradley Tamás',
      age: 43,
      isLoggedIn: false,
    },

    {
      id: 's34789',
      name: 'Fülig Jimy',
      age: 45,
      isLoggedIn: true,
    },
    {
      id: 's34712',
      name: 'Tuskó Hopkins',
      age: 49,
      isLoggedIn: true,
    },
    {
      id: 's20456',
      name: 'Wagner úr',
      age: 37,
      isLoggedIn: false,
    },
    {
      id: 's020453',
      name: 'Vanek úr',
      age: 46,
      isLoggedIn: true,
    },
    {
      id: 's02123',
      name: 'Senki Alfonz',
      age: 42,
      isLoggedIn: false,
    },
  ];

  OnUserDetailsClicked: EventEmitter<User | null> =
    new EventEmitter<User | null>();

  private dataArrived = new Subject<User[]>();
  private APIurl = '';

  constructor(private httpClient: HttpClient) {}

  getRequest() {
    this.httpClient.get<User[]>(this.APIurl).subscribe({
      next: (item) => {
        this.dataArrived.next(item);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAllUser(): Observable<User[]> {
    return this.dataArrived.asObservable();
  }

  getSelectedUser(user: User | null) {
    this.OnUserDetailsClicked.emit(user);
  }
}
