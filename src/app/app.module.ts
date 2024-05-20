import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneComponent } from './phone/phone.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    FormComponent,
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
