import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class JsonDataService {
  constructor() {}

  jsonData:any[] = [
    {
      displayName: 'Name',
      fieldName: 'name',
      type: 'Text',
      minLength: 5,
      maxLength: 21,
      isRequired: true,
      value:'type is name'
    },
    {
      displayName: 'Email',
      fieldName: 'email',
      type: 'Email',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      value:'xe@mail'

    },
    {
      displayName: 'Mobile',
      fieldName: 'mobile',
      type: 'Phone',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
      value:'9323322332'

    },
    {
      displayName: 'Textarea',
      fieldName: 'description',
      type: 'TextArea',
      minLength: 0,
      maxLength: 20,
      isRequired: true,
      value:'type is textarea'

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
      value:'India'

    },
    {
      displayName: 'State',
      fieldName: 'state',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
      options: [
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'UP', value: 'UP' },
      ],
      value:'Gujarat'

    },
    {
      displayName: 'City',
      fieldName: 'city',
      type: 'MultiSelect',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: 'Ahmedabad', value: 'Ahmedabad' },
        { label: 'Baroda', value: 'Baroda' },
        { label: 'Rajkot', value: 'Rajkot' },
      ],
      value:['Baroda']
    }
  ];

  jsonDataForTextBox:any[] = [
    {
      displayName: 'DisplayName',
      fieldName: 'displayName',
      type: 'Text',
      minLength: 5,
      maxLength: 21,
      isRequired: false,
    },
    {
      displayName: 'FieldName',
      fieldName: 'fieldName',
      type: 'Text',
      minLength: 0,
      maxLength: 0,
      isRequired: true,

    },
    {
      displayName: 'Type',
      fieldName: 'type',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: '--Choose Type--', value: 'Choose Type' },
        { label: 'Text', value: 'Text' },
        { label: 'Phone', value: 'Phone' },
        { label: 'Email', value: 'Email' },
      ],
      value:['Text']

    },
    {
      displayName: 'MinLength',
      fieldName: 'minLength',
      type: 'Number',
      minLength: 0,
      maxLength: 0,
      isRequired: false,

    },
    {
      displayName: 'MaxLength',
      fieldName: 'maxLength',
      type: 'Number',
      minLength: 0,
      maxLength: 0,
      isRequired: false,

    },
    {
      displayName: 'IsRequired',
      fieldName: 'isRequired',
      type: 'CheckBox',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
      value:'true'
    },
    {
      displayName: 'Value',
      fieldName: 'value',
      type: 'Text',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
    }
   
  ];

  jsonDataForTextArea:any[] = [
    {
      displayName: 'DisplayName',
      fieldName: 'displayName',
      type: 'Text',
      minLength: 5,
      maxLength: 21,
      isRequired: false,
    },
    {
      displayName: 'FieldName',
      fieldName: 'fieldName',
      type: 'Text',
      minLength: 0,
      maxLength: 0,
      isRequired: true,

    },
    {
      displayName: 'Type',
      fieldName: 'type',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: '--Choose Type--', value: 'Choose Type' },
        { label: 'TextArea', value: 'TextArea' },
      ],
      value:['TextArea']

    },
    {
      displayName: 'MinLength',
      fieldName: 'minLength',
      type: 'Number',
      minLength: 0,
      maxLength: 0,
      isRequired: false,

    },
    {
      displayName: 'MaxLength',
      fieldName: 'maxLength',
      type: 'Number',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
      value:'true'

    },
    {
      displayName: 'IsRequired',
      fieldName: 'isRequired',
      type: 'CheckBox',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
    },
    {
      displayName: 'Value',
      fieldName: 'value',
      type: 'Text',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
    }
   
  ];
  jsonDataForSelect:any[] = [
    {
      displayName: 'DisplayName',
      fieldName: 'displayName',
      type: 'Text',
      
      minLength: 5,
      maxLength: 21,
      isRequired: false,
    },
    {
      displayName: 'FieldName',
      fieldName: 'fieldName',
      type: 'Text',
      minLength: 0,
      maxLength: 0,
      isRequired: true,

    },
    {
      displayName: 'Value',
      fieldName: 'value',
      type: 'Text',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
    },
    {
      displayName: 'Type',
      fieldName: 'type',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: '--Choose Type--', value: 'Choose Type' },
        { label: 'Select', value: 'Select' },
        { label: 'MultiSelect', value: 'MultiSelect' },
      ],
      value:['Select']

    },
   
  ];

}
