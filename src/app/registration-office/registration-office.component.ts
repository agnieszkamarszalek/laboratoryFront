import {Component, NgModule, OnInit} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddPatientComponent} from '../addPatient/addPatient.component';

const routes: Routes = [
  {path: 'addPatient', component: AddPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@Component({
  selector: 'app-registration-office',
  templateUrl: './registration-office.component.html',
  styleUrls: ['./registration-office.component.scss']
})
export class RegistrationOfficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const routingComponentFromRegistrOffice = [AddPatientComponent]

