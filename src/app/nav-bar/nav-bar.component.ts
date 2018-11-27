import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationOfficeComponent} from '../registration-office/registration-office.component';
import {AddPatientComponent} from '../addPatient/addPatient.component';

const routes: Routes = [
  {path: 'registrationOffice', component: RegistrationOfficeComponent},
  {path: 'addPatient', component: AddPatientComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const routingComponents = [RegistrationOfficeComponent];
