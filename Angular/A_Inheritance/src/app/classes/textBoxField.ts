import { Validators } from '@angular/forms';
import { BaseField } from './baseField';

export class TextBoxField extends BaseField {
  constructor(fieldObject: any) {
    super(fieldObject);
    this.minLength = fieldObject.minLength;
    this.maxLength = fieldObject.maxLength;
    this.validatorsForEmailOrPhone(fieldObject);
  }

  validatorsForEmailOrPhone(fieldObject: any) :void{

    if (fieldObject.type == 'Email') 
      this.validators.push(Validators.email);
    if (fieldObject.type == 'Phone')
      this.validators.push(Validators.pattern(/^\d{10}$/));
  }
}
