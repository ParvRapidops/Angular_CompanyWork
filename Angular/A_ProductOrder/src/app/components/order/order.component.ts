import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyDataService } from 'src/app/dummy-data.service';
import { EditComponent } from '../edit/edit.component';
import { RemoveComponent } from '../remove/remove.component';
import { NgModel } from '@angular/forms';
import { BaseList } from '../base-list/base-list';

@Component({
  selector: 'app-order',
  templateUrl: './../base-list/base-list.html',
  styleUrls: ['./order.component.css'],
  providers: [DummyDataService],
})
export class OrderComponent extends BaseList {
 
  @ViewChild('Modal')modalForAddingData!:NgModel;
  constructor(private dummyData: DummyDataService) {
    super();
    this.title = 'Order';

    this.rowData = this.dummyData.dummyDataForOrder;
    this.dummyData.setData(this.params);
    const columnDef = [
      { headerName: 'Company', field: 'company' },
      { headerName: 'Quantity', field: 'quantity' },
      { headerName: 'Edit', field: 'edit', cellRenderer: EditComponent },
      { headerName: 'Delete', field: 'delete', cellRenderer: RemoveComponent },
    ];
    this.setColumnDefs(columnDef);
  }

  override addData() {
  }
}
