import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  subjectForComponent1 = new Subject<number>();
  subjectForComponent2 = new Subject<number>();
  subjectForComponent3 = new Subject<number>();
  subjectForComponent4 = new Subject<number>();


  constructor() {}

  setNumberForComponent1(number: number) {
    this.subjectForComponent1.next(number);
  }

  setNumberForComponent2(number: number) {
    this.subjectForComponent2.next(number);
  }
  
  setNumberForComponent3(number: number) {
    this.subjectForComponent3.next(number);
  } 
  
  setNumberForComponent4(number: number) {
    this.subjectForComponent4.next(number);
  }

}
