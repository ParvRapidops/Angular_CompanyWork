import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentRef } from '@angular/core';
import { ApiDataService } from './apiData/api-data.service';
import { TextboxComponent } from './components/textbox/textbox.component';
import { RadioBtnComponent } from './components/radio-btn/radio-btn.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NumberTextboxComponent } from './components/number-textbox/number-textbox.component';

export interface api {
  type?: string;
  defaultValue?: string | number;
  fieldName?: string;
  isRemovable?: boolean;
  label?: string;
  option?: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class AppComponent {
  title = 'Angular_DynComp';

  counterForNumberCustomControl = 0;
  counterForDropdownControl = 0;
  counterForCustomControl = 0;
  counterForRadioBtn = 0;
  receivedApiData!: api[];
  myForm!: FormGroup;
  customForm!: FormGroup;
  counterForComponent = 0;
  isRemoveBtnVisible = false;
  customDropDownForm!: FormGroup;
  customRadioButtonForm!: FormGroup;

  constructor(
    private apiData: ApiDataService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  @ViewChild('container', { read: ViewContainerRef, static: true }) viewContainer!: ViewContainerRef;

  ngOnInit() {
    this.myForm = new FormGroup({});
    // this.customForm = new FormGroup({
    //   customTextbox: new FormControl(null, Validators.required),
    //   customTextboxForNumber: new FormControl(null, Validators.required),
    // });
    // this.customDropDownForm = new FormGroup({
    //   customDropdownLabel: new FormControl(null, Validators.required),
    //   options: new FormArray([new FormControl(null, Validators.required)]),
    // });
    // this.customRadioButtonForm = new FormGroup({
    //   customRadiobuttonLabel: new FormControl(null, Validators.required),
    //   options: new FormArray([new FormControl(null, Validators.required)]),
    // });

    // let option = this.customForm.get('options') as FormArray;
    this.apiData.getAPIData().subscribe((data: api[]) => {
      this.receivedApiData = data;
      console.log('Recieveddata', this.receivedApiData);
      this.createDynamicControl();
    });
  }

  deleteComponent(componentName: ComponentRef<any>) {
    this.viewContainer.remove(
      this.viewContainer.indexOf(componentName.hostView)
    );
  }

  createDynamicControl(): void {
    for (let indexOfParticularData of this.receivedApiData) {
      this.counterForComponent++;
      if (indexOfParticularData.type == 'text') {
        let createComponent =
          this.viewContainer.createComponent(TextboxComponent);
        createComponent.instance.componentId = this.counterForComponent;
        createComponent.instance.textBoxProperties = indexOfParticularData;
        createComponent.instance.textboxFromGroup = this.myForm;
        console.log('myForm:', this.myForm);
        createComponent.instance.valueChange.subscribe((res: any) => {
          this.deleteComponent(createComponent);
        });
      }
      if (indexOfParticularData.type == 'radio') {
        let createComponent =
          this.viewContainer.createComponent(RadioBtnComponent);
        createComponent.instance.radioBtnProperties = indexOfParticularData;
        createComponent.instance.radioBtnForm = this.myForm;
        createComponent.instance.valueChange.subscribe((res: any) => {
          this.deleteComponent(createComponent);
        });
      }
      if (indexOfParticularData.type == 'dropdown') {
        let createComponent =
          this.viewContainer.createComponent(DropdownComponent);
        createComponent.instance.dropDownProperties = indexOfParticularData;
        createComponent.instance.dropDownForm = this.myForm;
        createComponent.instance.valueChange.subscribe((res: any) => {
          this.deleteComponent(createComponent);
        });
      }
      if (indexOfParticularData.type == 'number') {
        let createComponent = this.viewContainer.createComponent(
          NumberTextboxComponent
        );
        createComponent.instance.textboxNumberProperties =
          indexOfParticularData;
        createComponent.instance.textboxNumberFromGroup = this.myForm;
        createComponent.instance.valueChange.subscribe((res: any) => {
          this.deleteComponent(createComponent);
        });
      }
    }
  }

  onSubmit(dynamicForm: FormGroup): void {
    console.log(this.myForm.value);
  }


}
