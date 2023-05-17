import { jsonData } from "../interface/interface";
import { BaseField } from "./baseField";

export class TextAreaField extends BaseField{

    constructor(fieldObject:jsonData){
        super(fieldObject);
    }
}