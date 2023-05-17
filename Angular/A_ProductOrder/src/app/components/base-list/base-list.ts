import { ICellRendererParams } from 'ag-grid';

export class BaseList{
  title!:string;
  params!:ICellRendererParams;
  rowData: any[] = [];
  columnDefs!: [];
 
  constructor(){}
  setColumnDefs(columnDefForGrid:any): void{
    this.columnDefs =columnDefForGrid;
  }

  onGridReady(params: any) {
    this.params=params;
  }

  onKeyUp(event: any) {
      this.rowData = this.rowData.filter((item) =>
        item.company.includes(event.target.value)
      );
    } 
    
    addData(){
    
    }
}
