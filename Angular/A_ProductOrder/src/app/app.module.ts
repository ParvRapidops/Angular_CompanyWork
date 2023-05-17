import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { AgGridModule } from 'ag-grid-angular';
import { EditComponent } from './components/edit/edit.component';
import { RemoveComponent } from './components/remove/remove.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    EditComponent,
    RemoveComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
