import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], searchString?: string): any {
    if (searchString) {
      const search = searchString.toLowerCase();
      return users.filter(user => {
        if (user.firstname.toLowerCase().indexOf(search) >= 0) {
          return true;
        } else if (user.lastname.toLowerCase().indexOf(search) >= 0) {
          return true;
        } else if (user.email.toLowerCase().indexOf(search) >= 0) {
          return true;
        }
      });
    } else {
      return users;
    }
  }

}
