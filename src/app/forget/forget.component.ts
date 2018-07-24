import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
  providers:[UserService, ValidateService]
})
export class ForgetComponent implements OnInit {
  validation = new ValidateService();
  validError = false;
  // showPassword = false;
  forgetGroup:any;
  constructor(private userService:UserService, private router: Router) { 
    this.forgetGroup={
      email:'',
      validateConfirm: null
    }
  }

  ngOnInit() {
  }

  forget(flag:boolean): void{
    if(flag){
      this.validError = !this.validation.confirmValidation(this.forgetGroup.validateConfirm);
      if(!this.validError){
        this.router.navigate(['/forget/pass'], {queryParams:{email: this.forgetGroup.email}})
      } else{
        setTimeout(()=>{
          this.validError = false;
        },3000);
        this.validation = new ValidateService();
        this.forgetGroup.validateConfirm = null;
      }
    }
  }

  registrate(){
    this.router.navigate(['/registration']);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
