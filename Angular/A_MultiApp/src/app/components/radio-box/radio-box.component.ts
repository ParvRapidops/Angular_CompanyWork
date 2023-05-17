import { Component ,Input} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.css']
})
export class RadioBoxComponent {
  @Input() radioBoxFormgroup!:FormGroup;
  control!:FormControl;

  ngOnInit(): void {
    this.control= new FormControl("",Validators.required);
    this.radioBoxFormgroup.addControl("gender",this.control);
  }
}
