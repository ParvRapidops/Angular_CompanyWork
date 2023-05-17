import { BaseField } from './baseField';

export class SelectField extends BaseField {
  
  options!:any[];
  isMultiple!:boolean;

  constructor(fieldObject:any) {
    super(fieldObject);
    this.options=fieldObject.options;
    
    if(fieldObject.type=='MultiSelect')
      this.isMultiple=true;
    else
      this.isMultiple=false;
  }
}
