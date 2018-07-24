import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  user: User;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  register(){
    if(this.user.email && this.user.password){
      this.userService.setUser(this.user);
      this.router.navigate(['/login']);
    }
  }

  onClick(){
    this.router.navigate(['/login']);
  }

}
