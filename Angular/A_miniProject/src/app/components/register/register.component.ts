import { Component,OnInit } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
interface forArray {
  name: string;
  email: string;
  password: string;
  userOption: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  ngOnInit(): void {
    console.log("userer")
  console.log(this.cookieService.get('currentUser'))
    if(this.cookieService.get('currentUser'))
       {
        console.log("userer")
        this.router.navigate(['/dashboard']);
       }
    
  }
  constructor(private router: Router,private cookieService:CookieService){}
  indexOfParticularObject: number = -1;
  arrayOfUserNdAdmin: forArray[] = [];

  onSubmit(myFormData: NgForm) {
    let objectOfUser: forArray = {
      name: myFormData.value.name,
      email: myFormData.value.email,
      password: myFormData.value.password,
      userOption: myFormData.value.option,
    };
    let arrayOfObjects = JSON.parse(
      sessionStorage.getItem('ArrayOfUsers') || '{}'
    );
    //console.log("length",arrayOfObjects.length);

    if (arrayOfObjects.length==undefined) {
      console.log("its length is zro")
      this.arrayOfUserNdAdmin.push(objectOfUser);
      console.log(this.arrayOfUserNdAdmin);
      sessionStorage.setItem(
        'ArrayOfUsers',
        JSON.stringify(this.arrayOfUserNdAdmin)
      );
      alert('Registration successful !');
      this.router.navigateByUrl('/login');
    } 
    else {

      for (let i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i].email == myFormData.value.email) {
          this.indexOfParticularObject = i;
          break;
        }
      }
      if(this.indexOfParticularObject>=0)
      {
        alert("this email is already registered!");
      }

      else{
      console.log('1');
      this.arrayOfUserNdAdmin = arrayOfObjects.concat(objectOfUser);
      console.log('2');
      sessionStorage.setItem(
        'ArrayOfUsers',
        JSON.stringify(this.arrayOfUserNdAdmin)
      );
      alert('Registration successful !');
      this.router.navigateByUrl('/login');

    }
  }

  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
