import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ForUserGuard implements CanActivate {
  constructor(private cookieService:CookieService,private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   const myCookieValue = JSON.parse(this.cookieService.get('currentUser')|| '{}');
   if(myCookieValue.userOption=="Admin")
   {
      return true;
  }
  else 
  {
    this.router.navigate(['/dashboard']);
   return true;
  }
  }
  
}
