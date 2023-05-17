import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
interface forUserTracking {
  email: string,
  track: string[];
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  ngOnInit()
  {
   console.log("userer")
  console.log(this.cookieService.get('currentUser'))
    if(this.cookieService.get('currentUser'))
       {
        console.log("userer")
        this.router.navigate(['/dashboard']);
       }
    
  }
  indexOfObject:number=-1;
  dataToShow:any;
  cookieValue= JSON.parse(this.cookieService.get('currentUser')|| '{}');
  currentTrack = JSON.parse(this.cookieService.get('trackby')|| '{}');
  arrayOfTrack:string[]=[];
  arrayForTrackedUsers:forUserTracking[]=[];
   objectForUser:forUserTracking={
    email:'',
    track:[]
   };
   i:number=0;

  constructor(private router: Router,private cookieService:CookieService){}
         
  showData(inputValue:any):any{
    this.indexOfObject = this.currentTrack.findIndex((x: { email: string; }) => x.email == this.cookieValue.email);
    let sizeOfArray:number;
    sizeOfArray=this.currentTrack[this.indexOfObject].track.length;
    this.arrayOfTrack=this.currentTrack[this.indexOfObject].track;
    this.i=sizeOfArray;
    if(inputValue=="A")
    {
     console.log("ello")
     this.dataToShow ={ 'name':"parv joshi",
     'email':"parv@gmail.com"
    }
    this.arrayOfTrack[this.i]="A";
    this.i++;
    console.log("er",this.objectForUser.track);

  }
  
   else if(inputValue=="B")
    {
      this.dataToShow = { 'name':"abhi patel",
      'email':"abhi@gmail.com"
     }
     
    this.arrayOfTrack[this.i]="B";
    this.i++;
    }
   else if(inputValue=="C")
    {
      this.dataToShow = { 'name':"abhinish tiwari",
      'email':"abhinish@gmail.com"
     }
  
    this.arrayOfTrack[this.i]="C";
    this.i++;
    }

   else if(inputValue=="D")
    {
      this.dataToShow = { 'name':"shashank gohil",
      'email':"shashank@gmail.com"
     }
     this.arrayOfTrack[this.i]="D";
     this.i++;
    } 

    if(this.cookieValue.userOption=="Admin" || this.cookieValue.userOption=="User")
    {
    this.currentTrack[this.indexOfObject].track=this.arrayOfTrack;
    console.log("mycookie",this.currentTrack);
    this.cookieService.set("trackby",JSON.stringify(this.currentTrack));
    this.arrayOfTrack=this.arrayOfTrack;
    }
    else
    {
      console.log("no reach")
    }
  }
  logOut(){

    this.cookieService.delete('currentUser');
    this.router.navigateByUrl('/login');
    alert("logout Successfull! ");
  }

  keepMyTrack(){
  
    if(this.indexOfObject==-1)
    {
        console.log("not there");
    }
    else{
      console.log("cookievalue",this.cookieValue);
      this.currentTrack[this.indexOfObject].track=this.arrayOfTrack;
      console.log("mycookie",this.currentTrack);
      this.cookieService.set("trackby",JSON.stringify(this.currentTrack));
    }

    this.router.navigate(['/list']);
  }


}
