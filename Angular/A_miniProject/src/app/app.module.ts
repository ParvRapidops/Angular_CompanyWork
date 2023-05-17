import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/currentUser/user.component';
import { AuthorizeGuard } from './guards/authorize.guard';
import { ForUserGuard } from './guards/for-user.guard';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';

const routes:Routes=[
  { path: '', redirectTo:'/register',pathMatch:'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: UserComponent ,canActivate:[AuthorizeGuard]},
  { path: 'list', component: ListComponent ,canActivate:[ForUserGuard]},

]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
