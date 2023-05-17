import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TextBoxComponent } from 'src/app/custom/custom.module';
import { RadioBoxComponent } from 'src/app/custom/custom.module';
import {DropdownBoxComponent} from 'src/app/custom/custom.module';
import { CheckBoxComponent } from 'src/app/custom/custom.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user';
  ArrayForAppData:any[]=[];
  myForm!: FormGroup;
  @ViewChild('container', { read: ViewContainerRef, static: true }) viewContainer!: ViewContainerRef;
           
  ngOnInit(){
    this.myForm = new FormGroup({});
    let textBoxRef = this.viewContainer.createComponent(TextBoxComponent);
    let radioBoxRef = this.viewContainer.createComponent(RadioBoxComponent);
    let checkBoxRef = this.viewContainer.createComponent(CheckBoxComponent);
    let dropDownRef = this.viewContainer.createComponent(DropdownBoxComponent);
    console.log("ererer")
    textBoxRef.instance.textBoxFormGroup = this.myForm;
    radioBoxRef.instance.radioBoxFormgroup=this.myForm;
    checkBoxRef.instance.checkBoxFormGroup=this.myForm;
    dropDownRef.instance.dropdownBoxFormGroup=this.myForm;
  }

  onSubmit(myForm:FormGroup){
        console.log(myForm.value);
        let dataFromLocalStorage=JSON.parse(localStorage.getItem('UserData')||'{}');
        

        if(dataFromLocalStorage.length==undefined)
        {  
          this.ArrayForAppData.push(myForm.value);
          localStorage.setItem('UserData',JSON.stringify(this.ArrayForAppData));
        } 
        else
        { 
          let objectForLocalStorage={
            username:myForm.value.username,
            gender:myForm.value.gender,
            pet:myForm.value.pet,
            city:myForm.value.city,
          }

          dataFromLocalStorage.push(objectForLocalStorage);
          localStorage.setItem('UserData',JSON.stringify(dataFromLocalStorage));

        }
        myForm.reset();
  }
}
