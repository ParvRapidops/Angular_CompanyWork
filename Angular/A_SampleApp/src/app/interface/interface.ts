export interface jsonData {
    displayName:string;
      fieldName:string;
      type: string;
      minLength: number;
      maxLength: number;
      isRequired:boolean;
      options:options[] | null,
      value:string;
}

export interface options {
    label:string;
    value:string;
}


