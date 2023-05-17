import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-a',
  templateUrl: './class-a.component.html',
  styleUrls: ['./class-a.component.css']
})
export class ClassAComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
      this.activatedRoute.data.subscribe((data)=>{
        console.log(data);
      })
  }

  randomObject :any ={
    'name':'parv joshi',
    'age':'22',
    'email':'parv@gmail.com',
  }


}
