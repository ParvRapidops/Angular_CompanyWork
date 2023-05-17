import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthguardGuard } from './authguard.guard';
import { MycusPipe } from './mycus.pipe';

const routes :Routes=[
  {
    path: 'admin',
    component: AppComponent,
    canActivateChild: [AuthguardGuard], 
    children: [{ path:'login',component:LoginComponent} ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MycusPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
