import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioBoxComponent } from '../components/radio/radio.component';
import { DropdownBoxComponent } from '../components/dropdown/dropdown.component';
import { TextBoxComponent } from '../components/textbox/textbox.component';
import { CheckBoxComponent } from '../components/checkbox/checkbox.component';

@NgModule({
  declarations: [CheckBoxComponent,DropdownBoxComponent,RadioBoxComponent,TextBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class CustomModule { }
export { TextBoxComponent, RadioBoxComponent, CheckBoxComponent,DropdownBoxComponent };

