
import { Component, createComponent, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiDataService } from '../apiData/api-data.service';
import { TextboxComponent } from '../components/textbox/textbox.component';
import { RadioBtnComponent } from '../components/radio-btn/radio-btn.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
import { NumberTextboxComponent } from '../components/number-textbox/number-textbox.component';
import { AppComponent } from '../app.component';

export interface api {
  type?: string;
  defaultValue?: string | number;
  fieldName?: string;
  isRemovable?: boolean;
  label?: string;
  option?: string[];
}

@Component({
  selector: 'app-inputmodal',
  templateUrl: './inputmodal.component.html',
  styleUrls: ['./inputmodal.component.css']
})
export class InputmodalComponent {

  @ViewChild('myModal') modal!: NgbModal;
  @ViewChild('numberbox') myInput2!: NgbModal;
  @ViewChild('textbox') myInput1!: NgbModal;
  @ViewChild('radioBox') myInput3!: NgbModal;
  @ViewChild('dropdownBox') myInput4!: NgbModal;
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
    public modalService: NgbModal,
    private containerRef:AppComponent
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.myForm = this.containerRef.myForm;
    this.customForm = new FormGroup({
      customTextbox: new FormControl(null, Validators.required),
      customTextboxForNumber: new FormControl(null, Validators.required),
    });
    this.customDropDownForm = new FormGroup({
      customDropdownLabel: new FormControl(null, Validators.required),
      options: new FormArray([new FormControl(null, Validators.required)]),
    });
    this.customRadioButtonForm = new FormGroup({
      customRadiobuttonLabel: new FormControl(null, Validators.required),
      options: new FormArray([new FormControl(null, Validators.required)]),
    });

    let option = this.customForm.get('options') as FormArray;
    this.apiData.getAPIData().subscribe((data: api[]) => {
      this.receivedApiData = data;
      console.log('Recieveddata', this.receivedApiData);
      console.log("eee",this.customForm.value.customTextboxForNumber)
    });
  }

  onSubmit(dynamicForm: FormGroup): void {
    console.log(this.myForm.value);
  }

  selectOptions() {
    return (this.customDropDownForm.get('options') as FormArray).controls;
  }

  addOptions(): void {
    (<FormArray>this.customDropDownForm.get('options')).push(
      new FormControl(null, Validators.required)
    );
  }
  selectOptionsForRadio() {
    return (this.customRadioButtonForm.get('options') as FormArray).controls;
  }

  generateTextbox(txtValue: string) {
    if (txtValue == '') alert('input should not be empty!');
    else {
      this.counterForCustomControl++;
      let textboxCustomControl = {
        type: 'textbox',
        defaultValue: '',
        fieldName: 'textbox' + this.counterForCustomControl,
        label: txtValue,
      };
      let createComponent =
        this.containerRef.viewContainer.createComponent(TextboxComponent);
      createComponent.instance.textBoxProperties = textboxCustomControl;
      createComponent.instance.textboxFromGroup = this.myForm;
      this.customForm.reset();
      this.myForm.value[createComponent.instance.textBoxProperties.fieldName!]=createComponent.instance.textBoxProperties.defaultValue;
      console.log("thisowrld",this.containerRef.myForm.value)
    }

  }

  generateNumberTextbox(numberTextboxNumber: string) {
    if (numberTextboxNumber == '') alert('input should not be empty!');
    else {
      this.counterForNumberCustomControl++;
      let textboxCustomControl = {
        type: 'number',
        defaultValue: '',
        fieldName: 'numberTextbox' + this.counterForNumberCustomControl,
        label: numberTextboxNumber,
      };
      let createComponent = this.containerRef.viewContainer.createComponent(
        NumberTextboxComponent
      );
      createComponent.instance.textboxNumberProperties =
        textboxCustomControl;
      createComponent.instance.textboxNumberFromGroup = this.myForm
      this.customForm.reset();
      this.myForm.value[createComponent.instance.textboxNumberProperties.fieldName!]=createComponent.instance.textboxNumberProperties.defaultValue;
      console.log("eee",createComponent.instance.textboxNumberProperties.defaultValue)
    }
  }

  generateDropdown(form: FormGroup, txtDropdownLabelValue: any) {
    if (txtDropdownLabelValue == '') alert('input should not be empty!');
    else {
      let counter = 0;
      counter++;
      let optionsAry = [];
      for (let i = 0; i < form.value.options.length; i++) {
        optionsAry.push(form.value.options[i]);
      }
      let customDropDown = {
        type: 'dropdown',
        defaultValue: 'India',
        fieldName: 'dropdownList' + counter,
        isRemovable: true,
        label: form.value.customDropdownLabel,
        option: optionsAry,
      };
      let createComponent =
        this.containerRef.viewContainer.createComponent(DropdownComponent);
      createComponent.instance.dropDownProperties = customDropDown;
      createComponent.instance.dropDownForm = this.myForm;
      this.customDropDownForm.reset();
      this.myForm.value[createComponent.instance.dropDownProperties.fieldName!]=createComponent.instance.dropDownProperties.defaultValue;

    }
    form.reset();
  }

  generateRadio(radioForm: FormGroup, txtRadiobtnValue: any) {
    if (txtRadiobtnValue == '') alert('input should not be empty!');
    else {
      this.counterForRadioBtn++;
      console.log(this.counterForRadioBtn);
      let arrayForRadioOption = [];

      for (let i = 0; i < radioForm.value.options.length; i++) {
        arrayForRadioOption.push(radioForm.value.options[i]);
      }
      console.log(arrayForRadioOption);
      let customRadiobutton = {
        type: 'boolean',
        defaultValue: '',
        fieldName: 'CustomRadio' + this.counterForRadioBtn,
        isRemovable: true,
        label: radioForm.value.customRadiobuttonLabel,
        option: arrayForRadioOption,
      };
      let createComponent =
        this.containerRef.viewContainer.createComponent(RadioBtnComponent);
      createComponent.instance.radioBtnProperties = customRadiobutton;
      createComponent.instance.radioBtnForm = this.customRadioButtonForm;
      this.customRadioButtonForm.reset();
      this.myForm.value[createComponent.instance.radioBtnProperties.fieldName!]=createComponent.instance.radioBtnProperties.defaultValue;

    }
    radioForm.reset();
  }

  addOptionsForRadio(): void {
    (<FormArray>this.customRadioButtonForm.get('options')).push(
      new FormControl(null, Validators.required)
    );
  }
  removeOptionOfRadio(indexOfRadio: number) {
    console.log('meraindex', indexOfRadio);
    let options = this.customRadioButtonForm.get('options') as FormArray;
    options.removeAt(indexOfRadio);
  }

  removeOption(indexOfOption: number): void {
    console.log('meraindex', indexOfOption);
    let options = this.customDropDownForm.get('options') as FormArray;
    options.removeAt(indexOfOption);
  }


  onOptionSelected(mySelect: any) {
    console.log("sdsvsd");
  this.modalService.dismissAll();
    if (mySelect == 'textbox') {
      this.modalService.open(this.myInput1);
    } else if (mySelect == 'numberbox') {
      this.modalService.open(this.myInput2);
    } else if (mySelect == 'Radio') {
      this.modalService.open(this.myInput3);
    } else if (mySelect == 'DropDown') {
      this.modalService.open(this.myInput4);
    }
  }


  openMyModal(content:any) {
    this.modalService.open(content);
     
  }
}
