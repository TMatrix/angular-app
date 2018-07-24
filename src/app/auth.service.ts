import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService, private router: Router) { }

    login(email: string, password: string) {
      let uid = this.userService.isUser(email, password);
      if(uid !== 0) {
        localStorage.setItem('currentUser', JSON.stringify(this.userService.getById(uid)));
        this.router.navigate(['/dashboard'], { "queryParams": {id: uid} });
      }
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}
