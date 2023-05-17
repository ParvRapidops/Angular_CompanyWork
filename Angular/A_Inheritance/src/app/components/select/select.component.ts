import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../../base/base.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SelectComponent extends BaseComponent{
  
  ngOnInit(){

    this.addFormControl();

  }
 

  
}
