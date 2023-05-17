import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
  constructor(private cookieService:CookieService,private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
     
      const myCookieValue = JSON.parse(this.cookieService.get('currentUser')|| '{}');
      if(myCookieValue.userOption=="Admin" || myCookieValue.userOption=="User")
      {
          return true;     
     }
     else
     {
      this.router.navigate(['/login']);
      return true;
     }
  }
}
