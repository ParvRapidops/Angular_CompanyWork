import { Component, ViewChild } from '@angular/core';
import { SelectField } from './base/selectField';
import { TextAreaField } from './base/textAreaField';
import { TextBoxField } from './base/textBoxField';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { FormcreatorComponent } from './components/formcreator/formcreator.component';
import { BaseField } from './base/baseField';
import { DummyDataService } from './service/dummy-data.service';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A_SampleApp';
 signupForm!:FormGroup;
  fields: any = [];
  @ViewChild(FormcreatorComponent) createInput!: FormcreatorComponent;
  
  closeResult: string='';
   constructor(
    private jsonData: DummyDataService,
     private modalService: NgbModal,
  )
  {
    this.signupForm = new FormGroup({});
  }

  // ngOnInit(): void {
  //   console.log('sdsdcsdc');
  // }
}
