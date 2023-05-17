import { Component, Directive } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Directive({
  selector: 'app-base',
})
export class BaseComponent {

  fieldMeta!: any;
  formGroup!: FormGroup;
  errorMessage!: string;
  isVerified: boolean = true;

  addFormControl(): void {
    this.formGroup.addControl(this.fieldMeta.fieldName,new FormControl(this.fieldMeta.value,this.fieldMeta.validators));
  }

  isValid(): boolean {

    if (this.formGroup.controls[this.fieldMeta.fieldName].hasError('required')) {  
      console.log('error for required');
      this.errorMessage ='this field is required';
      this.isVerified = false;
      return false;
    }
    else if (this.formGroup.controls[this.fieldMeta.fieldName].hasError('minlength')) {  
      console.log('error for minlength');
      this.errorMessage = 'minlength should be ' + this.fieldMeta.minLength;
      this.isVerified = false;
      return false;
    }
    else if (this.formGroup.controls[this.fieldMeta.fieldName].hasError('maxlength')) {  
      console.log('error for maxlength');
      this.errorMessage = 'maxlength should be '+ this.fieldMeta.maxLength;
      this.isVerified = false;
      return false;
    }
    else if (this.formGroup.controls[this.fieldMeta.fieldName].hasError('email')) {  
      console.log('error for email');
      this.errorMessage = 'invalid email address';
      this.isVerified = false;
      return false;
    }
    else if (this.formGroup.controls[this.fieldMeta.fieldName].hasError('pattern')) {  
      console.log('error for pattern');
      this.errorMessage = 'invalid phone number';
      this.isVerified = false;
      return false;
    }


    this.errorMessage = '';
    this.isVerified=true;
    return true;
  }
}


