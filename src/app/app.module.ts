import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AddPatientComponent} from './addPatient/addPatient.component';
import {HttpClientModule} from '@angular/common/http';
import {InterceptorModule} from './interceptor.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
