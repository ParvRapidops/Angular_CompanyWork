import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassAComponent } from './components/classA/class-a/class-a.component';
import { ClassBComponent } from './components/classB/class-b/class-b.component';
import { ClassCComponent } from './components/classC/class-c/class-c.component';
import { ClassDComponent } from './components/classD/class-d/class-d.component';
import { Error404Component } from './components/error404/error404/error404.component';
import { MainComponent } from './components/main/main/main.component';
import { ParvComponent } from './components/classA/parv/parv.component';
import { AuthGuard } from './auth.guard';
import { UserdataResolver } from './userdata.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'cA',
        component: ClassAComponent,
        resolve:{
          user: UserdataResolver
        },
        canActivate:[AuthGuard],
      },
      { path: 'cB', component: ClassBComponent },
      { path: 'cC', component: ClassCComponent },
      { path: 'cD', component: ClassDComponent },
    ],
  },
  {path:'parv',component:ParvComponent},
  { path: '**', component: Error404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    ClassAComponent,
    ClassBComponent,
    ClassCComponent,
    ClassDComponent,
    Error404Component,
    MainComponent,
    ParvComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes,{
    useHash: true
  })],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
