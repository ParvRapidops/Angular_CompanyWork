import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { SelectComponent } from './components/select/select.component';
import { FormCreaterComponent } from './components/form-creater/form-creater.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.directive';
import { MyModalComponent } from './components/my-modal/my-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateOptionComponent } from './components/create-option/create-option.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    SelectComponent,
    FormCreaterComponent,
    TextAreaComponent,
    BaseComponent,
    MyModalComponent,
    CreateOptionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
