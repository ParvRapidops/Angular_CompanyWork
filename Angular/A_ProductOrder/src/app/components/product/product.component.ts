import { Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DummyDataService } from 'src/app/dummy-data.service';
import { BaseList } from '../base-list/base-list';
import { EditComponent } from '../edit/edit.component';
import { RemoveComponent } from '../remove/remove.component';


@Component({
  selector: 'app-product',
  templateUrl: './../base-list/base-list.html',
  styleUrls: ['./product.component.css'],
  providers:[DummyDataService]
})
export class ProductComponent extends BaseList{
   
  constructor(private dummyData:DummyDataService){
    super();
    this.title='Product';
    this.rowData = this.dummyData.dummyDataForProduct;
    this.dummyData.setData(this.params);
    const columnDef=[
      { headerName: 'Company', field: 'company' },
      { headerName: 'Edit', field: 'edit', cellRenderer: EditComponent },
      { headerName: 'Delete', field: 'delete', cellRenderer: RemoveComponent },
    ]
    this.setColumnDefs(columnDef);
        
  }
  override addData(){
  }


}