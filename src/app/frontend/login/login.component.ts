import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {SessionService} from '../../core/Services/session.service';
import {LoginResult} from '../../core/Entities/frontend/login/login.result';
import {ErrorResult} from '../../core/Entities/results/error.result';
import {ErrorStateMatcher} from '@angular/material';

export class LoginErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    // return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    return !!(control && control.invalid && isSubmitted);
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  fg: FormGroup;
  usernameErrorMatcher: ErrorStateMatcher;
  passwordErrorMatcher: ErrorStateMatcher;

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      'username': ['', Validators.compose([
        Validators.required, Validators.minLength(4), Validators.maxLength(12)
      ])],
      'password': ['', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(120)
      ])],
    });

    this.usernameErrorMatcher = new LoginErrorMatcher();
    this.passwordErrorMatcher = new LoginErrorMatcher();
  }

  get username(): AbstractControl {
    return this.fg.get('username');
  }

  get password(): AbstractControl {
    return this.fg.get('password');
  }

  onSubmit() {
    this.fg.markAsDirty();
    if (this.fg.valid) {
      this.sessionService.login(this.fg.value).subscribe(
        (res: LoginResult) => {
          console.log(res.access_token, res.msg);
        },
        (error: ErrorResult) => {
          console.error(error.errors);
        }
      );
    } else {

    }
  }

  onRegister() {

  }
}
