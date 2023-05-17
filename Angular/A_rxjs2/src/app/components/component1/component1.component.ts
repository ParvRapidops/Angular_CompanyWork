import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  
  countOfComponent2!:number;
  countOfComponent3!:number;
  countOfComponent4!:number;
  count:number=0;
  
  constructor(private numberService: SharedService) {
    this.numberService.subjectForComponent2.subscribe((number) => {
      this.countOfComponent2 = number;
    });
    this.numberService.subjectForComponent3.subscribe((number) => {
      this.countOfComponent3 = number;
    });
    this.numberService.subjectForComponent4.subscribe((number) => {
      this.countOfComponent4 = number;
    });
  }

  increaseCount(){
    const observable=new Observable(
      (subscriber)=>{subscriber.next(this.count++);}
    )
    observable.subscribe({
      next:(val)=>console.log(val),
      error:(error)=>console.log(error),
      complete:()=>console.log('complete')
    })
    this.numberService.setNumberForComponent1(this.count);

  }
}
