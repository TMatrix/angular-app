import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent{
  password = '';
  email='';
  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.email = this.route.snapshot.queryParams.email;
    this.password = this.userService.getPasswordByEmail(this.email);
  }

}
