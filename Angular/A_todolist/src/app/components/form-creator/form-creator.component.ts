import { Component, ComponentRef, Input, OnInit, ViewChild } from '@angular/core/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {

  @Input()fields!:any[];
  @Input()formGroup!:FormGroup;
  @ViewChild('container')container!:ComponentRef<any>;
  constructor() {}

  ngOnInit(): void {
    for(let index=1;index<this.fields.length;index++)
      this.createComponentFunction();
  }

  createComponentFunction(){
    
  }

}
