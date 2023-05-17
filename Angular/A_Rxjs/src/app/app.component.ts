import { Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'A_Rxjs';
  @ViewChild('myInput')inputRef:any;

  myControl = new FormControl('');

  ngOnInit() {
  
    this.myControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(
        (value) =>{      
        if(this.inputRef.length==0)console.log("data",' ');
        else console.log('data',value);
       } );
  }
}
