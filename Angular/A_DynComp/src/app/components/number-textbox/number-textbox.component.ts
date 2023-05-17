import { Component, ComponentRef, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { api } from 'src/app/app.component';

@Component({
  selector: 'app-number-textbox',
  templateUrl: './number-textbox.component.html',
  styleUrls: ['./number-textbox.component.css']
})
export class NumberTextboxComponent {
  
  @Input() textboxNumberProperties: api = {};
  @Input() textboxNumberFromGroup!: FormGroup;
  control!: FormControl;
  isHidden = false;
  @Output() valueChange = new EventEmitter<any>();
  viewContainer: any;

  ngOnInit() {
    this.control = new FormControl(this.textboxNumberProperties.defaultValue);
    this.textboxNumberFromGroup.addControl(this.textboxNumberProperties.fieldName!, this.control)
  }
  deleteComponent(componentName: ComponentRef<any>) {
    this.viewContainer.remove(
      this.viewContainer.indexOf(componentName.hostView)
    );
  }
  onRemove() {
    console.log("Errer")
    console.log("wwerrr",this.textboxNumberProperties)
    this.isHidden = true;
    this.textboxNumberFromGroup.removeControl(this.textboxNumberProperties.fieldName!);
    this.valueChange.emit({ fieldName: this.textboxNumberProperties.fieldName });
 
  }


  
}
