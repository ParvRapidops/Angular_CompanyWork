import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { api } from 'src/app/app.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() dropDownProperties: api = {};
  @Input() dropDownForm!: FormGroup;
  control!: FormControl;
  isHidden = false;
  @Output() valueChange = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.dropDownForm)
    console.log("dropdp",this.dropDownProperties)
    this.control = new FormControl(this.dropDownProperties.defaultValue);
    this.dropDownForm.addControl(this.dropDownProperties.fieldName||"", this.control)
  }

  onChange(): void{
    console.log(this.control);
  }

  onRemove() {
    this.isHidden = true;
    this.dropDownForm.removeControl(this.dropDownProperties.fieldName!);
    this.valueChange.emit({ fieldName: this.dropDownProperties.fieldName });
  }
}
