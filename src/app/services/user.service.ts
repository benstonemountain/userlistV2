import { EventEmitter, Injectable } from '@angular/core';
import { User, UserIdState } from '../model/user.interface';
import { Observable, Subject, of } from 'rxjs';
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

  userIdStates: UserIdState[] = [
    {
      SSI: 's15734',
      state: true,
    },
    {
      SSI: 's367892',
      state: false,
    },
  ];

  OnUserDetailsClicked: EventEmitter<User | null> =
    new EventEmitter<User | null>();

  private dataArrived = new Subject<UserIdState[]>();
  private APIurl = '';

  constructor(private httpClient: HttpClient) {}

  getRequest() {
    //a get egy olyan observable-t ad vissza, amit a generikusában megadok
    // this.httpClient.get<UserIdState[]>(this.APIurl).subscribe({
    //innen indul az observer (aminek van error, next és complete metódusa)

    of(this.userIdStates).subscribe({
      next: (userIdStates) => {
        console.log(userIdStates);
        this.dataArrived.next(userIdStates);
      },
      error: (err) => {
        console.log(err);
      },

      complete: () => {
        console.log('get request complete');
      },
    });
    //a httpClient egy futás után már hívja a complete-et!!! --> befejezi az adat kibocsátást --> nem reaktív
  }

  getAllUser(): Observable<UserIdState[]> {
    return this.dataArrived.asObservable();
  }

  getSelectedUser(userID: string | null) {
    this.OnUserDetailsClicked.emit(null);
  }
}
