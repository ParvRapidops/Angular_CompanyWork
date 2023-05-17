import {  Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid';
import { GridOptions } from 'ag-grid-community';
import { DummyApiService } from './dummy-api.service';
import { IDatasource } from 'ag-grid-community';
import { EditComponent } from './edit/edit.component';

export interface CustomType {
  FirstName: string;
  LastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit ,OnInit{
  title = 'A_ForTesting';
  dataSource!: IDatasource;
  rowData: CustomType[] = [{ FirstName: 'parv', LastName: 'joshi' }];
  gridApi: any;
  rowBuffer:any=0;
  rowSelection:any;
  rowModelType:any;
  paginationPageSize:any;
  cacheOverflowSize:any;
  maxConcurrentDatasourceRequests:any;
  maxBlocksInCache:any;
  infiniteInitialRowCount:any;

  colsOfAgeAndMarks: ColDef[] = [
    { field: 'age' },
    { field: ''},
    { field: 'marks' },
    { field: '' },
  ];

  columnDefs = [
    { field: 'FirstName' },
    { field: 'btn1', cellRenderer: EditComponent },
    { field: 'LastName' },
    { field: 'btn2', cellRenderer: EditComponent },
    {
      field: 'FullName',
      cellRenderer:function(params:any){
          return params.data?.FirstName +" "+params.data?.LastName;
      }
    }
  ];
  
  ngOnInit(){
    this.dataSource = {
      getRows: (params: any) => {
       
         const endRow = params.endRow;
        console.log('endrow',this.apiData.dummyData.length)
        for (let i = 0; i < 100; i++) {
          const row = {
            FirstName: this.apiData.dummyData[i].FirstName,
            LastName: this.apiData.dummyData[i].LastName,
          };
        this.rowData.push(row);
        }
        params.successCallback(this.rowData);
      }

    }
  }
  constructor(private apiData: DummyApiService) {
    this.rowBuffer=0;
    this.rowSelection='multiple';
    this.rowModelType='infinite';
    this.cacheOverflowSize=21;
    this.maxConcurrentDatasourceRequests=2;
    this.maxBlocksInCache=2;
    this.infiniteInitialRowCount=1;

    // for (let i = 0; i < this.apiData.dummyData.length; i++) {
    //   let objectForRowData = {
    //     FirstName: this.apiData.dummyData[i].FirstName,
    //     LastName: this.apiData.dummyData[i].LastName,
    //   };
    //   this.rowData.push(objectForRowData);
    // }
  }

  onGridReady(event: any) {
    this.gridApi = event.api;
    event.api.setDatasource(this.dataSource);

  }


  onBtnExcludeColumns() {
    this.gridApi.setColumnDefs(this.columnDefs);
  }

  onBtnIncludeColumns() {
    this.gridApi.setColumnDefs(this.colsOfAgeAndMarks);
  }


  addInputs(fname: any, lname: any): void {
    if (fname.value == '' || lname.value == '')
      alert('inputs are not proper !');
    else {
      let objectForRowData = {
        FirstName: fname.value,
        LastName: lname.value,
      };
      this.rowData.push(objectForRowData);
      this.rowData = [...this.rowData];
      fname.value = '';
      lname.value = '';
    }
  }


  onPaginationChanged(event:any){
        console.log('paginationchanged')
  }
}
