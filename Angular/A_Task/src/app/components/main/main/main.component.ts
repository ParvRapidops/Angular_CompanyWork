import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userId: any;
  filter:any;
 
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['filter']);
    console.log("query",this.route.snapshot.queryParams['filter'])
    this.userId = this.route.snapshot.params['filter'];
    this.filter = this.route.snapshot.queryParams['filter'];

  }
}
