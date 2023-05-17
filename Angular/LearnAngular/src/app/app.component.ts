import { Component,OnInit,ViewChild,ElementRef} from '@angular/core';
import { delay, of } from 'rxjs';

interface Student {  
  firstName:string,
  lastName:string,
  email: String  
}  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  formatDiv=false;
  diffDiv=false;
  today = new Date();
  inputValue:any;
  title = 'LearnAngular';
  items = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
  private url: string = 'https://type.fit/api/quotes';
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  student:Student = { 
    firstName:'parv',
    lastName:'joshi',
    email:'xyz@gmail.com'
 } 

arrayOfObjects=[{name:'sd',salary:'32'},{name:'ssd',salary:'32'},{name:'ssds',salary:'32'},{name:'swsd',salary:'32'}];
 isLoading: boolean = true;
 data: any;

 ngOnInit(): void {
 this.data = of(this.arrayOfObjects).pipe(delay(2000))
}



inputFormatOfDate(inputValue:any){
  this.formatDiv=true;
  this.inputValue=inputValue;
}

differenceBetweenDates(inputValue:any){
  this.diffDiv=true;
  this.inputValue=inputValue;
  console.log("scdsd",this.inputValue)
}
}



