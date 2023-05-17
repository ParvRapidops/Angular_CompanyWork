import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  fireEvent(event:any){
          const data = event.target.innerHTML;
        this.childEvent.emit(data);
  }
  passData(event:any){
    this.childEvent.emit(event.target.value);
}
  constructor() {}
  ngOnInit(): void {
  }       

}