import { Component,OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit{
      @Input() textBoxFormGroup!:FormGroup;
      control!:FormControl;

      ngOnInit(): void {
        this.control= new FormControl("",Validators.required);
        this.textBoxFormGroup.addControl("username",this.control);
      }


      
}
