import { ValidatorFn, Validators } from '@angular/forms';

export class BaseField {
  displayName!: string;
  inputType!: string;
  isRequired!: boolean;
  value!: any;
  fieldName!: string;
  validators!: ValidatorFn[];
  minLength!: number;
  maxLength!: number;

  constructor(public fieldObject: any) {
    
    this.displayName = fieldObject.displayName;
    this.isRequired = fieldObject.isRequired;
    this.inputType = fieldObject.type;
    this.value = fieldObject.value;
    this.fieldName = fieldObject.fieldName;
    this.validators = [];
    this.getValidators(fieldObject);
   
  }

  getValidators(fieldObject:any){
    if (fieldObject.isRequired) this.validators.push(Validators.required);
    if (fieldObject.minLength > 0) this.validators.push(Validators.minLength(fieldObject.minLength));
    if (fieldObject.maxLength > 0) this.validators.push(Validators.maxLength(fieldObject.maxLength));
  }
}
