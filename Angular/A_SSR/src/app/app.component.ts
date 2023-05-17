import { Component, OnInit } from '@angular/core';
import { DummyDataService } from './dummy-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'A_SSR';
  data: any[] = [];

  constructor(private dataService: DummyDataService) { }

  ngOnInit(){


    this.dataService.getData()
      .subscribe(data => this.data = data);

      
  }
}
