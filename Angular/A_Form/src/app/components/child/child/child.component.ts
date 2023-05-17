import { Component, Output,AfterContentInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  inputToParent :Subject<string>=new Subject<string>();
  left:string="ecr";

  ngAfterContentInit():void{

  }

  ngOnInIt(){

  }
  sayHiToParent(){

  }
}
