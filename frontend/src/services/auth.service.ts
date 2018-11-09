import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import {CookieService} from 'angular2-cookie/core';
import { Session } from './session.service'

import { environment } from '../environments/environment';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Sha512 } from './encrypt'

@Injectable()
export class AuthService {
  credentials: any;
  redirectUrl: string;
  base_url: string;
  private encript: any

  constructor (private http:Http, private session:Session){
    // this._cookieService.removeAll();
    this.base_url = environment.api_url;
    this.credentials = {"online": 0}
    this.encript = new Sha512();
  }

  login(username: string, password: string) {
    // const hash_user = sha256(username);
    password = this.encript.SHA512(password).toString();
    let _id = this.encript.SHA512(username).toString();

    return this.http.post(this.base_url+'/auth/login/', {email:username, password:password, _id:_id})
        .map(res => {
            this.credentials = res.json();
            console.log(this.credentials)
            if(this.credentials['role'] !== 0){
            this.session.putObject('online', this.credentials['role']);
                this.session.putObject('user', this.credentials);
                return this.credentials;
            }else{
                this.session.removeAll();
                return this.credentials;
            }
      })
  }

  logout() {
    this.session.removeAll();
    this.credentials = []
  }



    signup(data: Object) {
        let date = new Date();
        let timestamp = date.getTime()

        data['password'] = this.encript.SHA512(data['password']).toString();
        data['_id'] = this.encript.SHA512(data['email']).toString();
        data['date'] = date.toLocaleString();
        data['timestamp'] = timestamp;

        return this.http.post(this.base_url+'/auth/signup/', data)
        .map(res => {
            // this.credentials = res.json();
            return res.json()
            // console.log(this.credentials)
            // if(this.credentials){
            //     this.session.putObject('online', this.credentials['role']);
            //     this.session.putObject('user', this.credentials);
            // }else{
            //     this.session.removeAll();
            // }
        })
    }


}
