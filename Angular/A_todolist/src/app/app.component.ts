import { Component, TemplateRef, ViewChild } from '@angular/core/core';
import { FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { SharedService } from './service/shared.service';
import { SelectField } from './class/selectField';
import { DateField } from './class/dateField';
import { TextAreaField } from './class/textAreaField';
import { TextBoxField } from './class/textBoxField';
import { RadioField } from './class/radioField';
import { jsonData,fieldType } from './interface/interface';
import { RadioBtnComponent } from './components/radio-btn/radio-btn.component';
import { DateComponent } from './components/date/date.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A_TodoList';
  signupForm!:FormGroup;
  fields: fieldType[] = [];
  @ViewChild(FormCreatorComponent) createInput!: FormCreatorComponent;
  closeResult: string='';
  constructor(
    private jsonData: SharedService,
    private modalService: NgbModal,
  ) {
    this.signupForm = new FormGroup({});
  }

  ngOnInit(): void {
   this.loopingJsonData(this.jsonData.jsonData);
    console.log('sdsdcsdc');

  }

  loopingJsonData(jsonData: jsonData[]) {
     return jsonData.forEach(this.addFields);
     
  }

  addFields = (fieldObject: jsonData) => {
    let componentToRender, fieldMeta;

    if (
      fieldObject.type == 'Text' ||
      fieldObject.type == 'Email' ||
      fieldObject.type == 'Number' ||
      fieldObject.type == 'Password' ||
      fieldObject.type == 'Phone' 
    ) { 
      componentToRender = TextBoxComponent;
      fieldMeta = new TextBoxField(fieldObject);
    } else if (fieldObject.type == 'TextArea') {
      componentToRender = TextAreaComponent;
      fieldMeta = new TextAreaField(fieldObject);
    }
    else if (fieldObject.type == 'Radio') {
      componentToRender = RadioBtnComponent;
      fieldMeta = new RadioField(fieldObject);
    }
    else if (fieldObject.type == 'Date') {
      componentToRender = DateComponent;
      fieldMeta = new DateField(fieldObject);
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
        formGroup: this.signupForm,
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


}
