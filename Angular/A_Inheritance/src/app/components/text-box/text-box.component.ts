import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../../base/base.directive';


@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextBoxComponent extends BaseComponent {
  
  inputType!: string;
    ngOnInit():void {
    this.addFormControl();
   
  }


}
