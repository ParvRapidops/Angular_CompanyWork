import { Component,EventEmitter,Output,OnInit } from '@angular/core';

@Component({
  selector:'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  
  arrayOfObjects:any= [];
  arrayOfInputValues:any=[];
  value:any;
  isButton1Visible=true;
  isButton2Visible=false;
  ngOnInit() {
  }

  RemoveValue(i:any){
    this.arrayOfObjects.splice(i,1);
    console.log(this.arrayOfObjects)
  }

  AddValue(){
    this.arrayOfObjects.push({value: ""});
   // console.log(this.arrayOfObjects)
   this.isButton1Visible=false;
   this.isButton2Visible=true;
  }

  PassData(){
 
    for(let i=0;i<this.arrayOfObjects.length;i++)
    {
        console.log("arrayOfObjects",this.arrayOfObjects[i].value);
        this.arrayOfInputValues[i]=this.arrayOfObjects[i].value;
    }
    console.log("arrayOfObjects",this.arrayOfObjects)
    this.arrayOfInputValues.unshift(this.value);
    console.log("arrayOfInputValues",this.arrayOfInputValues);
    this.newItemEvent.emit(this.arrayOfInputValues.filter(Boolean));

    if(this.arrayOfInputValues.length>1 || this.arrayOfInputValues[this.arrayOfInputValues.length-1]==this.arrayOfInputValues[this.arrayOfInputValues.length-2])
    {
        this.arrayOfInputValues.pop();
    }
  }

}
