import { CookieService } from 'angular2-cookie/core';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Session {
  credentials: string;

  constructor (private _cookieService:CookieService){

  }

  get(id: string){
    this.credentials = this._cookieService.get(id);
    if(this.credentials){
      return JSON.parse(this.credentials)
    }else{return false}
  }

  putObject(id: string, object: Object){
    return this._cookieService.putObject(id, object)
  }

  put(id: string, value: string){
    return this._cookieService.put(id, value)
  }

  removeAll(){
      return this._cookieService.removeAll()
  }

}