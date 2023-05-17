import { jsonData } from "../interface/interface";
import { BaseField } from "./baseField";

export class DateField extends BaseField {
   
    constructor(fieldObject:jsonData){
        super(fieldObject);
    }
}