import { BaseField } from './baseField';

export class TextAreaField extends BaseField{


  constructor(fieldObject:any) {
    super(fieldObject);
    this.minLength=fieldObject.minLength;
    this.maxLength=fieldObject.maxLength;
    
  }
}
