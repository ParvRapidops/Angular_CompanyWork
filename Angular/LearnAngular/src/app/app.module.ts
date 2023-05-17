import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dateDifferencePipe } from './pipe.component';
import { dateFormatPipe } from './pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    dateFormatPipe,
    dateDifferencePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
