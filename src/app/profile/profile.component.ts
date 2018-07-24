import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.userService.getById(+this.route.snapshot.queryParams.id);
  }

  update(user: User, id: number){
    user = this.user;
    id = +this.route.snapshot.queryParams.id;
    user.id = id;
    let users: User[] = this.userService.getUsers();
    let indexOuter:number = -1;
    users.forEach((elem, index)=>{
      if (elem.id === user.id){
        indexOuter = index;
      }
    });
    if ( indexOuter >= 0 ){
      users.splice(indexOuter, 1);
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

}
