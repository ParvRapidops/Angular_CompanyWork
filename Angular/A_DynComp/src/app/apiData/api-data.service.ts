import { Injectable } from '@angular/core';
import { of } from 'rxjs';
export interface api {
  type?: string,
  defaultValue?: string | number,
  fieldName?: string,
  isRemovable?: boolean,
  label?: string,
  options?: string[]
}
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor() { }

  API_STATIC_DATA:any=[{
    type:'radio',
    defaultValue:'radio',
    fieldName:'radio',
    isRemovable:false,
    label: 'Radio',
    option:['male','female']
  },{
    type:'text',
    defaultValue:'text',
    fieldName:'text',
    isRemovable:false,
    label: 'Textbox',
    option:[]
  },{
    type:'number',
    defaultValue:'number',
    fieldName:'number',
    isRemovable:false,
    label: 'numberTextbox',
    option:[]
  },{
    type:'dropdown',
    defaultValue:'dropdown',
    fieldName:'dropdown',
    isRemovable:false,
    label: 'Dropdown',
    option:['cat','dog','mice','calf']
  }];

  getAPIData(){
     return of(this.API_STATIC_DATA);
  }

}
