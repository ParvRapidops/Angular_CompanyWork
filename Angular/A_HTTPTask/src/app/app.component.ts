import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ForthTask';
  addAndEditButton=false;
  constructor(private http: HttpClient) {}
  vegetablesAndKilograms: any = [
    { vegetableName: 'Spinach', vegetableKilogram: '23' },
    { vegetableName: 'Potato', vegetableKilogram: '23' },
  ];

  addVegetableAndKilos(vegetable: any, kilogram: any): void {
    let regexOfVegetable = /^[A-Za-z]+$/;
    let regexOfKilogram = /^[0-9]+$/;
    if (regexOfVegetable.test(vegetable) && regexOfKilogram.test(kilogram)) {
      console.log('hello');
      let vegetableObject = {
        vegetableName: vegetable,
        vegetableKilogram: kilogram,
      };
      this.vegetablesAndKilograms.push(vegetableObject);
    } else {
      alert('please input properly');
    }
  }
  removeCurrentRow(objectInArray: any): void {
    console.log(objectInArray);
    let indexOfObject = this.vegetablesAndKilograms.indexOf(objectInArray);
    this.vegetablesAndKilograms.splice(indexOfObject, 1);
    console.log(this.vegetablesAndKilograms);
  }

  postDataToJsonServer(inputVegetable: any, inputKilogram: any):void{
    console.log("welloe");
    let vegetableObject = {
      vegetableName: inputVegetable,
      vegetableKilogram: inputKilogram,
    };
    this.http
      .post('http://localhost:3000/posts',this.vegetablesAndKilograms )
      .subscribe((response) => {
        console.log(response);
      });
    this.http
      .post('http://localhost:3000/posts', vegetableObject)
      .subscribe((response) => {
        console.log(response);
      });
   
  }

  editCurrentRow(vegetable:any,inputVegetable:any,inputKilogram:any):void{
  
      console.log("editrowfunction");
      inputVegetable.value=vegetable.vegetableName;
      inputKilogram.value=vegetable.vegetableKilogram;
      this.addAndEditButton=true;
  }

  editInput(inputVegetable:any,inputKilogram:any){
    
    
    this.addAndEditButton=false;
    let vegetableObject = {
      vegetableName: inputVegetable,
      vegetableKilogram: inputKilogram,
    };
    this.vegetablesAndKilograms.push(vegetableObject);
    inputVegetable.value="";
    inputKilogram.value="";
  }
}
