import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input: any;

  constructor(private router: Router, private authService: AuthService) { 
    this.input = {
      email: '',
      password: ''
    }
  }

  ngOnInit() {
  }

  login(flag:boolean):void{
    if (flag) {
      this.authService.login(this.input.email, this.input.password);
    }
    // this.input = {
    //   email: '',
    //   password: ''
    // }
    //Check input user data in localStorage, and if true navigate to dashboard,
    //if false clear inputs, and message user not exist
  }

  onClick(direction: string): void {
    if (direction === 'registration'){
      this.router.navigate(['/registration']);
      return;
    } else{
      this.router.navigate(['/forget']);
      return;
    }
  }

}
