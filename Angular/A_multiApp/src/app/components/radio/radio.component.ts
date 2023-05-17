import { Component ,Input} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})

export class RadioBoxComponent {
  @Input() radioBoxFormgroup!:FormGroup;
  control!:FormControl;

  ngOnInit(): void {
    this.control= new FormControl("",Validators.required);
    this.radioBoxFormgroup.addControl("gender",this.control);
  }
}
