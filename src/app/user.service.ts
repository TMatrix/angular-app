import { Injectable } from '@angular/core';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  setUser(user: User): void{
    let users: User[] = [];
    if (this.getUsers()){
      users = this.getUsers();
      user.id = users.length + 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      user.id = users.length + 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  getUsers(): User[]{
    return JSON.parse(localStorage.getItem('users'));
  }

  getPasswordByEmail(email: string): string{
    let users = JSON.parse(localStorage.getItem('users'));
    let userIndex = -1;
    users.forEach((elem, index) => {
      if(elem.email === email){
        userIndex = index;
      }
    });
    return users[userIndex].password;
  }

  isUser(email: string, password: string): number {
    let users = this.getUsers();
    let id = 0;
    if (users && users.length !== 0){
    users.forEach((elem) => {
        if((elem.email === email) && (elem.password === password)){
          id = elem.id;
        }
      });
    }
    return id;
  }

  getById(id:number): User {
    let users = this.getUsers();
    let userIndex = -1;
    users.forEach((elem, index) => {
      if(elem.id === id){
        userIndex = index;
      }
    });
    return users[userIndex];
  }
}
