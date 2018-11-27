import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationOfficeComponent} from '../registration-office/registration-office.component';

@Component({
  selector: 'app-addPatient',
  templateUrl: './addPatient.component.html',
  styleUrls: ['./addPatient.component.scss']
})

export class AddPatientComponent implements OnInit {
  firstName = '';
  lastName = '';
  pesel = '';
  gender = '';
  phoneNumber = '';

  constructor(private httpClient: HttpClient) {

  }
  setFirstName(event: any) {
    this.firstName = (<HTMLInputElement>event.target).value;
    console.log(this.firstName);
  }

  setLastName(event: any) {
    this.lastName = event.target.value;
    console.log(this.lastName);
  }

  setPesel(event: any) {
    this.pesel = event.target.value;
    console.log(this.pesel);
  }

  setGender(event: any) {
    this.gender = event.target.value;
    console.log(this.gender);
  }

  setPhoneNumber(event: any) {
    this.phoneNumber = event.target.value;
    console.log(this.phoneNumber);
  }

  addNewPatientPostMethod(form) {
    console.log('test');
    this.httpClient.post('http://localhost:8082/patients', {
      firstName: this.firstName,
      lastName: this.lastName,
      pesel: this.pesel,
      gender: this.gender,
      phoneNumber: this.phoneNumber
    })
      .subscribe(
        (data: any) => {
          if (data.lenght) {
            console.log(data);
          }
        }
      );
    form.reset();
  }

  ngOnInit(): void {
  }
}


