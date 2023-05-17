import { Component } from '@angular/core';

@Component({
  selector: 'app-create-option',
  templateUrl: './create-option.component.html',
  styleUrls: ['./create-option.component.css']
})
export class CreateOptionComponent {

  arrayOfLabelAndValue!:any[];
  countForLabel: any;
  countForValue: any;

  RemoveValue(){
	//	this.arrayOfLabelAndValue.splice(index,1);
	}
}
