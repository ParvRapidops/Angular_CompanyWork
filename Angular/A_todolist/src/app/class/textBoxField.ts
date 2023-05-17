import { jsonData } from "../interface/interface";
import { BaseField } from "./baseField";

export class TextBoxField extends BaseField{

    constructor(fieldObject:jsonData){
        super(fieldObject);
    }
}