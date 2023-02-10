import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList: Usuario[] = [
    { user: 'tbalducchi', name: 'Tomas', lastname: 'Balducchi', sex: 'M' },
    { user: 'tbalducchi', name: 'Tomas', lastname: 'Balducchi', sex: 'M' },
    { user: 'tbalducchi', name: 'Tomas', lastname: 'Balducchi', sex: 'M' },
    { user: 'tbalducchi', name: 'Tomas', lastname: 'Balducchi', sex: 'M' },
    { user: 'tbalducchi', name: 'Tomas', lastname: 'Balducchi', sex: 'M' },
    { user: 'tbalducchi', name: 'Tomas', lastname: 'Balducchi', sex: 'M' },
    { user: 'tbalducchi', name: 'Tomas', lastname: 'Balducchi', sex: 'M' }
  ];

  constructor() { }

  getUsers() {
    return this.usersList.slice();
  }

  deleteUser(index: number) {
    this.usersList.splice(index, 1);
  }

  addUser(user: Usuario) {
    this.usersList.unshift(user);
  }
}
