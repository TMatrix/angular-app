import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OnlyfotnotloggedGuard implements CanActivate {

  constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('currentUser')) {
        this.router.navigate(['/dashboard'], { queryParams: { id: JSON.parse(localStorage.getItem('currentUser')).id }});
        return false;
      }

      return true;
    }
}
