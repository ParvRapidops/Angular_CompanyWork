import { NgModule } from '@angular/core/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { SelectComponent } from './components/select/select.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { RadioBtnComponent } from './components/radio-btn/radio-btn.component';
import { DateComponent } from './components/date/date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormCreatorComponent,
    TextBoxComponent,
    SelectComponent,
    CheckBoxComponent,
    TextAreaComponent,
    RadioBtnComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
