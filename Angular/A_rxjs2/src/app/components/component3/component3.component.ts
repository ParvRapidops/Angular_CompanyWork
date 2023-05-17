import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {


  countOfComponent1!:number;
  countOfComponent2!:number;
  countOfComponent4!:number;
  count:number=0;

  constructor(private numberService: SharedService) {
    this.numberService.subjectForComponent1.subscribe((number) => {
      this.countOfComponent1 = number;
    });
    this.numberService.subjectForComponent2.subscribe((number) => {
      this.countOfComponent2 = number;
    });
    this.numberService.subjectForComponent4.subscribe((number) => {
      this.countOfComponent4 = number;
    });
  }


  increaseCount(){
    console.log(this.count)
    const observable=new Observable(
      (subscriber)=>{subscriber.next(this.count++);}
    )
    observable.subscribe({
      next:(val)=>console.log(val),
      error:(error)=>console.log(error),
      complete:()=>console.log('complete')
    })
    this.numberService.setNumberForComponent3(this.count);

  }

}
