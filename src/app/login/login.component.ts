import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password=""
  email=""
  constructor(){
    this.email=""
    this.password=""
  }
  login(){
    console.log(this.email)
    console.log(this.password)
    this.email=""
    this.password=""
  
  
  }
}
