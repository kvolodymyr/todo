import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public ls: LocalStorageService) { }

  signIn() {
    return new Promise( (resolve, reject) => {
      this.ls.set('user', { username: 'test' });
      resolve();
    });
  }

  signOut() {
    return new Promise( (resolve, reject) => {
      this.ls.remove('user');
      resolve();
    });
  }

  hasSignedIn () {
    return !!this.ls.get<User>('user');
  }
}
