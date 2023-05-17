import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private cookieService:CookieService,private router:Router) {}
  currentTrack = JSON.parse(this.cookieService.get('trackby')|| '{}');

}
