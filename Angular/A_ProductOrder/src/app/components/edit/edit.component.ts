import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GridApi, ICellRendererParams } from 'ag-grid-community';
import { DummyDataService } from 'src/app/dummy-data.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [{ provide: DummyDataService}]
})
export class EditComponent implements ICellRendererAngularComp {

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

  editRow(){
    let particularRow=this.params.node;
    let updatedValue=prompt('edit the value',particularRow.data.company);
    particularRow.data.company=updatedValue;
    this.params.api.applyTransaction({update:[particularRow.data]})
  }


}
