import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckBoxComponent implements OnInit {
    
  @Input() checkBoxFormGroup!:FormGroup;
  control!:FormControl;
  checkedArray:any;
  checkboxForm!:FormGroup;
  arrayOfPet:string[]=['lion','dog','squirrel','calf'];

  ngOnInit(): void {
    this.control= new FormControl(false,Validators.required);
    this.checkBoxFormGroup.addControl("pet",this.control);
    this.checkboxForm=new FormGroup({
      checkbox1: new FormControl(false),
      checkbox2: new FormControl(false),
      checkbox3: new FormControl(false)
    })
}

  onSubmit(){
    console.log("hello world")
  }

}
