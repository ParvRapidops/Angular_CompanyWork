import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-detail',
  templateUrl: './a-detail.component.html',
  styleUrls: ['./a-detail.component.css']
})
export class ADetailComponent  implements OnInit{

  constructor(private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
  }
  

}
