import { AfterViewInit, Component, ViewChild,ElementRef,AfterViewChecked,OnInit,OnChanges,DoCheck, AfterContentInit, AfterContentChecked} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChildComponent } from './components/child/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck,AfterViewChecked,OnInit,AfterViewInit,AfterContentInit,AfterContentChecked{
  title = 'Angular_Form';
  street = '';
  city = '';
  state = '';
  zip = '';
  male='';
  female= '' ;
  @ViewChild('myDiv', { static: true }) myDiv!: ElementRef;

  // onSubmit(formData: any) {
  //   console.log('Form data:', formData);
  //   console.log(`Street: ${this.street}`);
  //   console.log(`City: ${this.city}`);
  //   console.log(`State: ${this.state}`);
  //   console.log(`Zip: ${this.zip}`);
  // }

  ngOnInit(){
    console.log("hello int");
   // console.log(this.myDiv.nativeElement.innerHTML="ewwe");

  }
  ngAfterViewInit() {
    console.log("hello aftrviewinit");
   // console.log(this.myDiv.nativeElement.innerHTML="3223");
  }  
  ngAfterContentInit()
  {
    console.log("hello aftercontent Init");

  }
  ngAfterContentChecked(): void {
    {
    console.log("hello aftercontent checked");

    }
  }
  ngDoCheck()	{
  // console.log(this.myDiv.nativeElement.innerHTML="parv");
  
  }
  ngAfterViewChecked()	{
    console.log("after cuewcheckedc");
  //  console.log(this.myDiv.nativeElement.innerHTML="parv joshi");
  }

  


}
