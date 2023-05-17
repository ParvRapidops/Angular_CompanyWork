import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecondTask';
  arrayOfInputStrings:any=[];

  arrayToShowInputValue(data:string){
    this.arrayOfInputStrings=data;
   console.log("arrayOfInputStrings",this.arrayOfInputStrings);
  }
}
