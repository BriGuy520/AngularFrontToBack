import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../models/User';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: false
      }, 
      {
        firstName: 'Kevin',
        lastName: 'Bacon',
        age: 54,
        email: 'kevin@example.com',
        isActive: false,
        registered: new Date('03/11/2019 05:30:00'),
        hide: true
      }, 
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        email: 'karen@example.com',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      }  
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next({name: 'Brian'});
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }

}
