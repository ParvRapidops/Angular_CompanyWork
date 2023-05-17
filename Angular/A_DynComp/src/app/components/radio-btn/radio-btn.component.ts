import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { api } from 'src/app/app.component';


@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.css'],

})
export class RadioBtnComponent {
  @Input() radioBtnProperties: api = {};
  @Input() radioBtnForm!: FormGroup;
  control!: FormControl;
  isHidden = false;
  @Output() valueChange = new EventEmitter<any>();

  ngOnInit() {
    this.control = new FormControl(this.radioBtnProperties.defaultValue);
    this.radioBtnForm.addControl(this.radioBtnProperties.fieldName!, this.control)
  }


  onRemove() {
    console.log("Errer")
    this.isHidden = true;
    this.radioBtnForm.removeControl(this.radioBtnProperties.fieldName!);
    this.valueChange.emit({ fieldName: this.radioBtnProperties.fieldName });
  }
}