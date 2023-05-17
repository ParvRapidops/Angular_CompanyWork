import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyModalComponent {
  errorMessage!: string;
  @Output() customFields = new EventEmitter<any>();
  closeResult = '';
  customForm!: FormGroup<any>;
  isValid!: boolean;
  @Input()formGroup!:FormGroup;

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
    this.customForm = new FormGroup({
      displayName: new FormControl('', Validators.required),
      fieldName: new FormControl('', Validators.required),
      type: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(Select|MultiSelect|Text|TextArea|Email|Phone)$/i),
      ]),
      isRequired: new FormControl(false, undefined),
      minLength: new FormControl('',undefined),
      maxLength: new FormControl('',undefined),
      value: new FormControl('',undefined),
    });
    console.log('fomr',this.formGroup);
    
  }

  openModal(content: any, buttonValue: string) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    // this.title = buttonValue;
    // if (this.title === 'Add Select' || this.title === 'MultiSelect') {
    //   this.customForm.addControl(
    //     'options',
    //     new FormArray([
    //       new FormGroup({
    //         label: new FormControl(null, Validators.required),
    //         value: new FormControl(null, Validators.required),
    //       }),
    //     ])
    //   );
    //   console.log('customForm', this.customForm);
    // }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addCustomOption() {
    let optionsFormArray = this.customForm.get('options') as FormArray;
    optionsFormArray.push(
      new FormGroup({
        label: new FormControl(null, Validators.required),
        value: new FormControl(null, Validators.required),
      })
    );
  }

  getCustomOptions() {
    return (this.customForm.get('options') as FormArray).controls;
  }

  removeCustomOption(index: any) {
    let arrayOfOptions = (this.customForm.get('options') as FormArray).controls;
    console.log('optionAray', arrayOfOptions);

    if (arrayOfOptions.length - 1 != 0) arrayOfOptions.splice(index, 1);
  }

  validInput(): boolean {
    if (this.customForm.controls['type'].hasError('pattern')) {
      this.errorMessage = 'Enter Valid input type!';
      this.isValid = false;
      return false;
    }

    this.isValid = true;
    return true;
  }

  onSubmit(myForm: FormGroup) {
    
    if (myForm.value.type == 'MultiSelect') {
      let arrayForMultipleValue = myForm.value.value.split(',');
      myForm.value.value = arrayForMultipleValue;
    }
    this.customFields.emit(myForm.value);

    myForm.reset();
  }
}
