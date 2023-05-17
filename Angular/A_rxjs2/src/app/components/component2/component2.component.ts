import { Component,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

  countOfComponent1!:number;
  countOfComponent3!:number;
  countOfComponent4!:number;
  count:number=0;

  constructor(private numberService: SharedService) {
    this.numberService.subjectForComponent1.subscribe((number) => {
      this.countOfComponent1 = number;
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
    this.numberService.setNumberForComponent2(this.count);

  }

}
