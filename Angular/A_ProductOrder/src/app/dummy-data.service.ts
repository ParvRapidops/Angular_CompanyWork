import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface api {
  company: string;
  quantity: number;
}

export interface apiForProduct {
  company: string;
}

@Injectable()
export class DummyDataService {
  public subjectOfApi = new Subject<any>();

  setData(data: any) {
    this.subjectOfApi.next(data);
  }

  getData(): Observable<any> {
    return this.subjectOfApi;
  }

  dummyDataForOrder: api[] = [
    { company: 'Toyota', quantity: 23 },
    { company: 'Ford', quantity: 43 },
    { company: 'Porsche', quantity: 55 },
    { company: 'Bentley', quantity: 25 },
    { company: 'Lemozine', quantity: 10 },
    { company: 'Porsche', quantity: 44 },
    { company: 'Pagani', quantity: 51 },
    { company: 'Aston Martin', quantity: 65 },
    { company: 'Lexus', quantity: 14 },
    { company: 'Bugatti', quantity: 24 },
  ];

  dummyDataForProduct: apiForProduct[] = [
    { company: 'Toyota' },
    { company: 'Ford' },
    { company: 'Porsche' },
    { company: 'Bentley' },
    { company: 'Lemozine' },
    { company: 'Porsche' },
    { company: 'Pagani' },
    { company: 'Aston Martin' },
    { company: 'Lexus' },
    { company: 'Bugatti' },
  ];
}
