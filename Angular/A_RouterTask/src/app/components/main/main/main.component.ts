import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isAdmin: boolean = false;

  constructor(private router:Router){

  }

  
  redirectUser() {
    if(this.isAdmin){
      this.router.navigate(['cA'],{
        queryParams:{
          abac:'aaaa',
        }
      });
    }else {
      this.router.navigate(['cB'])
    }
    this.isAdmin = !this.isAdmin;
    }
    

}
