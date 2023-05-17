import { ValidatorFn } from '@angular/forms';
import { jsonData } from '../interface/interface';

export class BaseField {
  displayName!: string;
  fieldName!: string;
  type!: string;
  minLength!: number;
  maxLength!: number;
  isRequired: boolean = false;
  validators!: ValidatorFn[];

  constructor(fieldObject: jsonData) {
    this.displayName = fieldObject.displayName;
    this.fieldName = fieldObject.fieldName;
    this.type = fieldObject.type;
    this.minLength = fieldObject.minLength;
    this.maxLength = fieldObject.maxLength;
    this.isRequired = fieldObject.isRequired;
  }
}
