import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AddPatientComponent} from './addPatient/addPatient.component';
import {HttpClientModule} from '@angular/common/http';
import {InterceptorModule} from './interceptor.module';
import {FormsModule} from '@angular/forms';
import { NavBarComponent, routingComponents } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    NavBarComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
