import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  FirstName=""
  LastName=""
  UserName=""
  Gender:any
  password=""
  email=""
  constructor(){
  }
  create(){
    console.log(this.FirstName)
    console.log(this.LastName)
    console.log(this.UserName)
    console.log(this.Gender)
    console.log(this.email)
    console.log(this.password)
    this.FirstName=""
    this.LastName=""
    this.UserName=""
    this.Gender=""
    this.email=""
    this.password=""
  }

}
