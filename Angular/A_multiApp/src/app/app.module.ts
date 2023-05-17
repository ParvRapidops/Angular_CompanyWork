import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TableDataComponent } from 'shared';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/shared/src/public-api';

const routes:Routes=[
  {path:'main',component:AppComponent},
  {path:'table',component:TableDataComponent,data: { myData: 'AppData' }},

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {}





 