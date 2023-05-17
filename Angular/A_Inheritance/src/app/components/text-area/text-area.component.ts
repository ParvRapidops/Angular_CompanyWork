import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '../../base/base.directive';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextAreaComponent extends BaseComponent{

  ngOnInit() {
    this.addFormControl();
  }

}
