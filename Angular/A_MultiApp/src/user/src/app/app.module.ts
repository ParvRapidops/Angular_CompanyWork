import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableDataComponent } from 'shared';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes:Routes=[
  {path:'table',component:TableDataComponent,data: { myData: 'UserData' }}
]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
