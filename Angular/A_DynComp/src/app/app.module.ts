import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { RadioBtnComponent } from './components/radio-btn/radio-btn.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NumberTextboxComponent } from './components/number-textbox/number-textbox.component';
import { InputmodalComponent } from './inputmodal/inputmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    RadioBtnComponent,
    DropdownComponent,
    NumberTextboxComponent,
    InputmodalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
