import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  Type,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectField } from './classes/selectField';
import { TextAreaField } from './classes/textAreaField';
import { TextBoxField } from './classes/textBoxField';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { JsonDataService } from './json-data.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCreaterComponent } from './components/form-creater/form-creater.component';

interface options {
  label: string;
  value: string;
}
interface fieldType {
  componentToRender?: Type<
    TextAreaComponent | TextBoxComponent | SelectComponent
  >;
  componentFieldInputs?: fieldMetaType;
}
interface fieldMetaType {
  fieldMeta?: TextBoxField | TextAreaField | SelectField;
  formGroup?: FormGroup;
  value?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'A_Inheritance';
  titleForModal!: string;
  modalForm!: FormGroup;
  fields: fieldType[] = [];
  @ViewChild(FormCreaterComponent) createInput!: FormCreaterComponent;
  myForm!: FormGroup;
  closeResult!: string;
  optionAryForSelect: options[] = [];
  optionAryForFieldMeta: options[] = [];
  object: options = {
    label: '--choose type--',
    value: 'choose type',
  };
  constructor(
    private jsonData: JsonDataService,
    private modalService: NgbModal,
    private cdRef: ChangeDetectorRef
  ) {
    this.myForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.loopingJsonData(this.jsonData.jsonData);
    this.optionAryForSelect.push(this.object);
    this.optionAryForFieldMeta.push(this.object);
  }

  loopingJsonData(jsonData: any): options[] {
    return jsonData.forEach(this.addFields);
  }

  addFields = (fieldObject: any) => {
    let componentToRender, fieldMeta;

    if (
      fieldObject.type == 'Text' ||
      fieldObject.type == 'Email' ||
      fieldObject.type == 'Number' ||
      fieldObject.type == 'CheckBox' ||
      fieldObject.type == 'Phone'
    ) {
      componentToRender = TextBoxComponent;
      fieldMeta = new TextBoxField(fieldObject);
    } else if (fieldObject.type == 'TextArea') {
      componentToRender = TextAreaComponent;
      fieldMeta = new TextAreaField(fieldObject);
    } else if (
      fieldObject.type == 'Select' ||
      fieldObject.type == 'MultiSelect'
    ) {
      componentToRender = SelectComponent;
      fieldMeta = new SelectField(fieldObject);
    }

    let objectForField = {
      componentToRender: componentToRender,
      componentFieldInputs: {
        fieldMeta: fieldMeta,
        value: fieldObject.value,
        formGroup: this.myForm,
      },
    };
    this.fields.push(objectForField);
  };

  openModal(content: TemplateRef<any>): any {
    return this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  modalForTextBox(content: TemplateRef<any>): void {
    this.titleForModal = 'Add Text';
    this.fields = [];
    this.modalForm = new FormGroup({});
    this.loopingJsonData(this.jsonData.jsonDataForTextBox);
    this.openModal(content);
  }

  modalForTextArea(content: TemplateRef<any>): void {
    this.titleForModal = 'Add TextArea';
    this.fields = [];
    this.modalForm = new FormGroup({});
    this.loopingJsonData(this.jsonData.jsonDataForTextArea);
    this.openModal(content);
  }

  modalForSelect(content: TemplateRef<any>): void {
    this.titleForModal = 'Add Select';
    this.fields = [];
    this.modalForm = new FormGroup({});
    this.loopingJsonData(this.jsonData.jsonDataForSelect);
    this.openModal(content);
  }

  addOptionBox(label: string, value: string): void {
    let object = {
      label: label,
      value: value,
    };
    this.optionAryForSelect.push(object);
    console.log('optionAryForSelect', this.optionAryForSelect);
    console.log('optionAryForFieldMeta', this.optionAryForFieldMeta);
  }

  removeCustomOption(index: number): void {
    console.log(index);
    console.log('wewewedwed',this.optionAryForFieldMeta);
    
    if (this.optionAryForSelect.length - 1 != 0) {
      this.optionAryForSelect.splice(index, 1);
      this.optionAryForFieldMeta.splice(index+1,1);
    }
  }

  addingLabelAndValue(label: string, value: string): void {
    let object = {
      label: label,
      value: value,
    };
    this.optionAryForFieldMeta.push(object);
  }

  modalSubmit(): void {
    if (this.modalForm.value.type == 'Select')
      this.modalForm.value.value = [this.modalForm.value.value];
    else if (this.modalForm.value.type == 'MultiSelect')
      this.modalForm.value.value = this.modalForm.value.value.split(',');
    this.modalForm.value.options = this.optionAryForFieldMeta;
    this.fields = [];
    this.addFields(this.modalForm.value);
    this.createInput.createComponentFunction(this.fields[0]);
    this.modalReset();
  }

  modalReset(): void {
    this.modalForm.reset();
    this.optionAryForSelect = [];
    this.optionAryForSelect.push(this.object);
    this.optionAryForFieldMeta = [];
    this.optionAryForFieldMeta.push(this.object);
  }

  onSubmit(): void {
    console.log('formValue', this.myForm.value);
  }
}
