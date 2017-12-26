import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'txtName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'txtEmail': new FormControl(null, [Validators.required, Validators.email] ),
      'txtUserName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'txtPassword': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'txtConfirmPassword': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }
  onRegister() {
    console.log(this.signUpForm);
  }

}
