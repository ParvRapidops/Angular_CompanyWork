import { jsonData } from "../interface/interface";
import { BaseField } from "./baseField";

export class RadioField extends BaseField{

    constructor(fieldObject:jsonData){
        super(fieldObject);
    }
}