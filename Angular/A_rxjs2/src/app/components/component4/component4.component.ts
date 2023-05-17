import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component {


  countOfComponent1!:number;
  countOfComponent2!:number;
  countOfComponent3!:number;
  count:number=0;

  constructor(private numberService: SharedService) {
    this.numberService.subjectForComponent1.subscribe((number) => {
      this.countOfComponent1 = number;
    });
    this.numberService.subjectForComponent2.subscribe((number) => {
      this.countOfComponent2 = number;
    });
    this.numberService.subjectForComponent3.subscribe((number) => {
      this.countOfComponent3 = number;
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
    this.numberService.setNumberForComponent4(this.count);
    
  }

}
