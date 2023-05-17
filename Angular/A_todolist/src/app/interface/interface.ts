import { Type } from "@angular/core/core";
import { FormGroup } from "@angular/forms";
import { DateField } from "../class/dateField";
import { RadioField } from "../class/radioField";
import { SelectField } from "../class/selectField";
import { TextAreaField } from "../class/textAreaField";
import { TextBoxField } from "../class/textBoxField";
import { DateComponent } from "../components/date/date.component";
import { RadioBtnComponent } from "../components/radio-btn/radio-btn.component";
import { SelectComponent } from "../components/select/select.component";
import { TextAreaComponent } from "../components/text-area/text-area.component";
import { TextBoxComponent } from "../components/text-box/text-box.component";

export interface jsonData {
  displayName: string;
  fieldName: string;
  type: string;
  minLength: number;
  maxLength: number;
  isRequired: boolean;
  options: options[] | null;
  value:string | ''
}

export interface options {
  label: string;
  value: string;
}

export interface fieldType {
  componentToRender?: Type<
    TextAreaComponent | TextBoxComponent | SelectComponent |RadioBtnComponent |DateComponent
  >;
  componentFieldInputs?: fieldMetaType;
}
export interface fieldMetaType {
  fieldMeta?: TextBoxField | TextAreaField | SelectField | RadioField| DateField;
  formGroup?: FormGroup;
  value?: any;
}
