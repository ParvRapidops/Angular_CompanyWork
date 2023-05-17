import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router,Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { MiddleComponent } from './Header/header/Middle/middle/middle.component';

const routes: Routes = [
  { path: 'lazy', component:HeaderComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
