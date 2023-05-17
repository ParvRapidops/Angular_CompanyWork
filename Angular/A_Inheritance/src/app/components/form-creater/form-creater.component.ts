import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ComponentRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectComponent } from '../select/select.component';
import { TextAreaComponent } from '../text-area/text-area.component';
import { TextBoxComponent } from '../text-box/text-box.component';

@Component({
  selector: 'app-form-creater',
  templateUrl: './form-creater.component.html',
  styleUrls: ['./form-creater.component.css'],
})
export class FormCreaterComponent implements OnInit {
  @Input() fields!: any[];
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  @Input() formGroup!: FormGroup;
  constructor(private cdRef: ChangeDetectorRef) {}
 
  ngOnInit() {
    for (let index = 0; index < this.fields.length; index++) 
      this.createComponentFunction(this.fields[index]);
    
  }


  createComponentFunction(fieldObject:any):void{
    
    let component: ComponentRef<
        TextAreaComponent | SelectComponent | TextBoxComponent
      > = this.container.createComponent(fieldObject.componentToRender);
      component.instance.fieldMeta=fieldObject.componentFieldInputs.fieldMeta;
      component.instance.formGroup = this.formGroup;
      console.log('fieldmeta',component.instance.fieldMeta);
      
      this.cdRef.detectChanges();

  }

}
