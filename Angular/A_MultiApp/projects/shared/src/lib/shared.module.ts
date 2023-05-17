import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { TableDataComponent } from './component/table-data/table-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SharedComponent,
    TableDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
