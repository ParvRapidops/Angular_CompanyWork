import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit{

  constructor(private actiateRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    console.log(this.actiateRoute.snapshot.data)
  }

}

