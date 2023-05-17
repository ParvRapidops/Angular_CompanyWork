import { Component } from '@angular/core';
import { GridApi } from 'ag-grid';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {ICellRendererParams } from 'ag-grid-community';
import { DummyDataService } from 'src/app/dummy-data.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})

export class RemoveComponent implements ICellRendererAngularComp{

  gridApi!:GridApi;
  params!:ICellRendererParams;
  constructor(private dummyData:DummyDataService){}
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.dummyData.getData().subscribe(data => {
      console.log('data',data)
      this.gridApi = data;
    });
    this.params=params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
      return false;
  }

  removeRow(){
    let particularRow=this.params.node;
    console.log('particularRow',particularRow)
    this.params.api.applyTransaction({remove:[particularRow.data]})
  }

}
