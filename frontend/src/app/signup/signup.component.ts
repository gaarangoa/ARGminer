import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    private emailFormControl: any;
    private passwordFormControl: any;
    private password2FormControl: any;
    private nameFormControl: any;
    private institutionFormControl: any;

    private datetime = new Date(0);

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

      ngOnInit() {

          this.emailFormControl = new FormControl('', [
                Validators.required,
                Validators.pattern(EMAIL_REGEX),
                Validators.minLength(5)
          ]
            );

            this.passwordFormControl = new FormControl('', [
              Validators.required, Validators.minLength(8) ]
            );

            this.password2FormControl = new FormControl('', [
                Validators.required, Validators.minLength(8) ]
              );

            this.institutionFormControl = new FormControl('', [
                Validators.required, Validators.minLength(2) ]
            );

            this.nameFormControl = new FormControl('', [
                Validators.required, Validators.minLength(2) ]
              );
    }

    signup(email: string, user: string, institution: string, password: string,  password2: string ) {

        if ( password !== password2 || !this.emailFormControl.valid || !this.institutionFormControl.valid || !this.nameFormControl.valid ) {
            alert('Error: check the fields!')
        } else {
            this.authService.signup({ email: email, user: user, institution: institution, password2: password2, password: password })
                .subscribe(res => {
                    this.router.navigate(['login/'])
                });
        }

    }

    match_password(pass1: string, pass2: string) {
        return pass1 === pass2 ? true : false;
    }

}


