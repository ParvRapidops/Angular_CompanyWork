import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from '../components/check-box/check-box.component';
import { RadioBoxComponent } from '../components/radio-box/radio-box.component';
import { DropdownBoxComponent } from '../components/dropdown-box/dropdown-box.component';
import { TextBoxComponent } from '../components/text-box/text-box.component';
import { ReactiveFormsModule } from '@angular/forms';



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

