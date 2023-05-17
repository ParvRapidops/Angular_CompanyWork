import { Injectable } from '@angular/core/core';
import { jsonData } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() { }
  jsonData: jsonData[] = [
    {
      displayName: 'FirstName',
      fieldName: 'fname',
      type: 'Text',
      minLength: 5,
      maxLength: 21,
      isRequired: true,
      options:null,
      value:''
    },   
    {
      displayName: 'LastName',
      fieldName: 'lname',
      type: 'Text',
      minLength: 5,
      maxLength: 21,
      isRequired: true,
      options:null,
      value:''

    },
    {
      displayName: 'Email-Id',
      fieldName: 'email',
      type: 'Email',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options:null,
      value:''

    },
    {
      displayName: 'Date of Birth',
      fieldName: 'dob',
      type: 'Date',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options:null,
      value:''

    },
    {
      displayName: 'Gender',
      fieldName: 'gender',
      type: 'Radio',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options:null,
      value:''

    },
    {
      displayName: 'Address',
      fieldName: 'address',
      type: 'TextArea',
      minLength: 10,
      maxLength: 30,
      isRequired: true,
      options:null,
      value:''

    },
    {
      displayName: 'Mobile Number',
      fieldName: 'mobile',
      type: 'Phone',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options:null,
      value:''

    },
    {
      displayName: 'Country',
      fieldName: 'country',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: 'India', value: 'India' },
        { label: 'US', value: 'US' },
      ],
      value:''

    },
    {
      displayName: 'Country',
      fieldName: 'country',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: 'India', value: 'India' },
        { label: 'US', value: 'US' },
      ],
      value:''

    },
    {
      displayName: 'State',
      fieldName: 'state',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'UP', value: 'UP' },
      ],
      value:''

    },
    {
      displayName: 'City',
      fieldName: 'city',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: 'Ahmedabad', value: 'Ahmedabad' },
        { label: 'Gandinagar', value: 'Gandhinagar' },
        { label: 'Vadodara', value: 'Vadodara' },
        { label: 'Surat', value: 'Surat' },
      ],
      value:''

    },
    {
      displayName: 'Postal Zip-Code',
      fieldName: 'zipcode',
      type: 'Number',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options:null,
      value:''

    },
    {
      displayName: 'Password',
      fieldName: 'pwd',
      type: 'Password',
      minLength: 8,
      maxLength: 20,
      isRequired: true,
      options:null,
      value:''

    },
    {
      displayName: 'Confirm Password',
      fieldName: 'cfmpwd',
      type: 'Password',
      minLength: 8,
      maxLength: 20,
      isRequired: true,
      options:null,
      value:''

    }, 
  ];
}
