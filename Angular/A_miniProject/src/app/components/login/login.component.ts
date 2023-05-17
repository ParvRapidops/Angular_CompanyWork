import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
interface forUserTracking {
  email: string;
  track: string[]; 
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showError: boolean = false;
  constructor(private router: Router,private cookieService:CookieService) {}
  ngOnInit(): void {
    console.log("userer")
  console.log(this.cookieService.get('currentUser'))
    if(this.cookieService.get('currentUser'))
       {
        console.log("userer")
        this.router.navigate(['/dashboard']);
       }
    
  }
  
  currentCookieValue = JSON.parse(this.cookieService.get('currentUser')|| '{}');
  arrayForTrackedUsers:forUserTracking[]=[];
  currentTrack = JSON.parse(this.cookieService.get('trackby')|| '{}')
  noAnyObject:number=-1;

  onSubmit(myFormData: any) {
    let loginCredentials = JSON.parse(
      sessionStorage.getItem('ArrayOfUsers') || '{}'
    );
    
    console.log("user");
    
    for(let i=0;i<loginCredentials.length;i++)
    {
      if(loginCredentials[i].email==myFormData.value.email && loginCredentials[i].password==myFormData.value.password )
      {  
        this.noAnyObject=i;
        break;
      }
      else
      {
        this.noAnyObject=-1;
      }
  }

    if (this.noAnyObject <0) {
      alert('user not found');
    }   
    else  {

      if (loginCredentials[this.noAnyObject].userOption == 'Admin' || loginCredentials[this.noAnyObject].userOption == 'User') {
        let cookieObject={
          'email':loginCredentials[this.noAnyObject].email,
          'name':loginCredentials[this.noAnyObject].name,
          'userOption':loginCredentials[this.noAnyObject].userOption
        } 

        alert('Welcome to dashboard!');
        this.router.navigate(['/dashboard']);
        this.cookieService.set("currentUser",JSON.stringify(cookieObject));
        let currentUser:forUserTracking={
          'email':loginCredentials[this.noAnyObject].email,
          'track':[]
        }  
      if(this.currentTrack.length==undefined)
      {
        console.log("length",this.currentTrack.length)
        this.arrayForTrackedUsers.push(currentUser);
        this.cookieService.set("trackby",JSON.stringify(this.arrayForTrackedUsers));
      }
      else{  
        let indexOfObject;
        for(let i=0;i<this.currentTrack.length;i++)
        {
          if(this.currentTrack[i].email==myFormData.value.email)
          {
            console.log("yes it has");
            indexOfObject=1;
            break;
          }
          else{
            indexOfObject=-1;
          }
        }
       if(indexOfObject==1)
        {
          console.log("indexOfObject",indexOfObject)
          console.log("its already there")
        }
        else{
        console.log("indexOfObject",indexOfObject)
        console.log("length",this.currentTrack)
        this.currentTrack=this.currentTrack.concat(currentUser);
        this.cookieService.set("trackby",JSON.stringify(this.currentTrack));
      }
    }
      } 
      else  {   
        console.log("error");
      }
    }
  }

  navigateToRegister(){
    this.router.navigateByUrl('/register');
  }
}
