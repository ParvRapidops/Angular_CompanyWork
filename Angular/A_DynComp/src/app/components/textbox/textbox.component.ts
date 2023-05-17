import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { api } from 'src/app/app.component';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() textBoxProperties: api = {};
  @Input() textboxFromGroup!:FormGroup;
  @Input() componentId=0;
  @Output() valueChange = new EventEmitter<any>();
  isHidden = false;
  control!: FormControl;


  ngOnInit() {
    this.control = new FormControl(this.textBoxProperties.defaultValue,Validators.required);
        this.textboxFromGroup.addControl(this.textBoxProperties.fieldName!,this.control)
  }
  onRemove() {
    console.log("give",this.textBoxProperties);
    this.textboxFromGroup.removeControl(this.textBoxProperties.fieldName!);
    this.valueChange.emit(this.componentId);
  }
}