import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { Message } from 'primeng/components/common/api';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    public notification: Message[];
  private emailFormControl: any;
  private passwordFormControl: any;
  private databaseVersion: string;
  private databaseComments: string;
  private datetime = new Date(0);

    constructor(
        private authService: AuthService,
        private router: Router
  ) { }

    ngOnInit() {
        this.notification = []
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(EMAIL_REGEX)]
          );

          this.passwordFormControl = new FormControl('', [
            Validators.required]
          );
  }

  login(email: string, password: string) {

      this.authService.login(email, password)
          .subscribe(res => {
            this.notification = [];
            if (res['status'] === 'logged') {
                this.notification.push({severity:'success', summary:'Info', detail:res['message']});
                this.router.navigate(['classify/'])
            } else {
                this.notification.push({severity:'error', summary:'Error', detail:res['message']});
            }
      });
  }

}
