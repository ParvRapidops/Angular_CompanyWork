import { BaseField } from "./baseField";
import { jsonData, options } from "../interface/interface";

export class SelectField extends BaseField{

    options!:options[] | null;
    isMultiple!:boolean;
  
    constructor(fieldObject:jsonData) {
      super(fieldObject);
      this.options=fieldObject.options;
      
      if(fieldObject.type=='MultiSelect')
        this.isMultiple=true;
      else
        this.isMultiple=false;
    }
}