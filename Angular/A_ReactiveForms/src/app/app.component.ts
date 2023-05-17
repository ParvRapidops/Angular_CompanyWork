import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myTextArea: string = '';
  dataForInputTag:any;
  myForm!: FormGroup;
  timerId: any;
  ngOnInit(): void {
    this.myForm=new FormGroup({inputFields:new FormArray([])});

  }

  createInputs(){
    try{ 
      
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.dataForInputTag=JSON.parse(this.myTextArea);
      console.log(this.dataForInputTag);
      
      for(let index=0;index<this.dataForInputTag.length;index++)
      {
        (this.myForm.get('inputFields') as FormArray).push(new FormControl(null));
     
      }
      }, 1000);

    }
    catch{
      console.log("w")

    }
     // console.log(this.myForm)
     
  }

  onSubmit(){
    console.log(this.myForm.value)
  }

  

}