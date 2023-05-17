import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown-box',
  templateUrl: './dropdown-box.component.html',
  styleUrls: ['./dropdown-box.component.css']
})
export class DropdownBoxComponent implements OnInit {
   
  @Input() dropdownBoxFormGroup!:FormGroup;
  control!:FormControl;

  ngOnInit(): void {
    this.control= new FormControl("",Validators.required);
    this.dropdownBoxFormGroup.addControl("city",this.control);
  }

}
