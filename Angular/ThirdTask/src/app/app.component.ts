import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'ThirdTask';
  addAndEditButton = false;
  inputValues: string[] = [];
  arrayOfInputStrings: any = [];

  arrayToShowInputValue(data: string[]) {
    this.arrayOfInputStrings = data.join();
    console.log('Data', data);
    console.log('arrayOfInputStrings', this.arrayOfInputStrings);
  }

  inputFromTextBox():void {
    if (this.arrayOfInputStrings) {
      console.log('helloworld', this.arrayOfInputStrings);
      this.inputValues = this.arrayOfInputStrings.split(',');
      console.log(this.inputValues);
    }
    this.addAndEditButton = true;
  }

  editInput() {
    this.addAndEditButton = false;
  }



}
