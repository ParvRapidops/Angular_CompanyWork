import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

interface itemValue {
  value?: string;
  removeButton?: boolean;
  addButton?: boolean;
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() inputFromParent: string[] = [];
  arrayOfInputValues: any = [];
  value: any;
  inputBoxField: itemValue[] = [];

  ngOnInit(): void {
    let inputBoxValue: itemValue = {
      value: '',
      removeButton: false,
      addButton: true,
    };
    this.inputBoxField.push(inputBoxValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateInputBoxField();
  }

  removeValue(index: any) {
    this.inputBoxField.splice(index, 1);
    if (index == this.inputBoxField.length) {
      this.inputBoxField[this.inputBoxField.length - 1].addButton = true;
    }
    if (this.inputBoxField.length == 1) {
      this.inputBoxField[0].addButton = true;
      this.inputBoxField[0].removeButton = false;
    }
  }

  addValue(i: number) {
    let inputBoxValue: itemValue = {
      value: '',
      removeButton: true,
      addButton: true,
    };
    this.inputBoxField.push(inputBoxValue);
    this.inputBoxField[i].addButton = false;
    this.inputBoxField[i].removeButton = true;
    console.log(this.inputBoxField);
    console.log(this.inputBoxField.length);
  }

  passData() {
    for (let i = 0; i < this.inputBoxField.length; i++) {
      console.log('arrayOfObjects', this.inputBoxField[i].value);
      this.arrayOfInputValues[i] = this.inputBoxField[i].value;
    }
    console.log('arrayOfObjects', this.inputBoxField);
    console.log('arrayOfInputValues', this.arrayOfInputValues);
    console.log('input', this.arrayOfInputValues);
    this.newItemEvent.emit(
      this.arrayOfInputValues.filter((entry: any) => {
        return entry.trim() != '';
      })
    );

    if (
      this.arrayOfInputValues.length > 1 ||
      this.arrayOfInputValues[this.arrayOfInputValues.length - 1] ==
        this.arrayOfInputValues[this.arrayOfInputValues.length - 2]
    ) {
      this.arrayOfInputValues.pop();
    }
  }

  updateInputBoxField() {
    let extractInputBoxValue = this.extractInputBoxValueFromInputBoxField();
    this.inputFromParent = this.dublicateValueCheack(extractInputBoxValue);
    this.inputFromParent.forEach((parentInputValue: string) => {
      if (parentInputValue.trimStart()) {
        let createdBoxValue: itemValue = {
          value: parentInputValue.trimStart(),
          removeButton: true,
          addButton: true,
        };
        this.inputBoxField[this.inputBoxField.length - 1].addButton = false;
        this.inputBoxField[this.inputBoxField.length - 1].removeButton = true;
        this.inputBoxField.push(createdBoxValue);
      }
    });

    if (this.inputBoxField[0].value == '') this.inputBoxField.shift();
  }
  extractInputBoxValueFromInputBoxField() {
    let extractInputBoxValue: string[] = [];
    this.inputBoxField.forEach((inputBoxValue) => {
      if (inputBoxValue.value) {
        extractInputBoxValue.push(inputBoxValue.value);
      }
    });
    return extractInputBoxValue;
  }

  dublicateValueCheack(extractInputBoxValue: string[]) {
    return this.inputFromParent.filter((parenIinputBoxValue) => {
      return !extractInputBoxValue.includes(parenIinputBoxValue);
    });
  }
}
