import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class DataService {
  
  ARG: Object;
  
  constructor (private http:Http){
    this.ARG = [];
  }

  getRandomKnownARG() {
    return this.http.get('http://localhost:5000/random/')
      .map(res => {
        this.ARG = res.json()
      })
  }

}