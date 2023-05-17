import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  dataFromLocalStorage!: any;
  myData!: string;

  constructor(private route: ActivatedRoute) {

    this.myData = this.route.snapshot.data['myData'];
    this.dataFromLocalStorage = JSON.parse(localStorage.getItem('AppData')|| '{}');
 }

  ngOnInit(): void {

    console.log("happu")
    console.log(this.myData);
    console.log('data',this.dataFromLocalStorage)
  // else if(this.myData=='UserData')
  //   this.dataFromLocalStorage = JSON.parse(localStorage.getItem('UserData')|| '{}');
  //   else if(this.myData=='AccountData')
  //   this.dataFromLocalStorage = JSON.parse(localStorage.getItem('AccountData')|| '{}');

  }

   
}
