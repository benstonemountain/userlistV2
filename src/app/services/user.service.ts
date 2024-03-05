import { Injectable } from '@angular/core';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
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
   ]

  constructor() { }
}
