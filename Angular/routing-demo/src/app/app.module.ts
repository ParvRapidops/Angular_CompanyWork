import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';
import { MainComponent } from './main/main.component';
import { Errr404Component } from './errr404/errr404.component';
import { ADetailComponent } from './a-detail/a-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Errr404Component,
    ADetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        pathMatch:'full',
        redirectTo:'b'
      },
      {
        path:'a',
        component: AppComponent,
        data:{
            level: '1212',
            BaseLevel: 1
        },
        children:[
          {
            path:'b',
            component: BComponent,
            data:{
              level: '1212',
              BaseLevel: 1
            }
          },{
          path:':abhinesh',
          component: ADetailComponent
        }
        ]
      },
      {
        path: 'b',
        loadChildren: () => import('../app/second-module/second-module.module').then(m=> m.SecondModuleModule)
      },
      {
        path: '**',
        component: Errr404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
