import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BComponent } from '../b/b.component';



@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: BComponent
    }])
  ],
  exports: [BComponent]
})
export class SecondModuleModule { }
