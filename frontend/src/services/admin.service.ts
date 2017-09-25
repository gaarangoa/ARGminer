import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Location }   from '@angular/common';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class AdminService {
  
  baseUrl: string;
  
  constructor ( private http:Http,
                private location: Location
              ){
    
    if(location['_platformStrategy']._platformLocation._location.hostname == "localhost"){
      this.baseUrl = location['_platformStrategy']._platformLocation._location.protocol + '//' + location['_platformStrategy']._platformLocation._location.hostname+":5001"
    }else{
      this.baseUrl = location['_platformStrategy']._platformLocation._location.protocol + '//' + location['_platformStrategy']._platformLocation._location.hostname+"/argpedia_api"
    }
    
    
  }


  // ADMIN SECTION

  getCuratedARGs(){
    return this.http.get(this.baseUrl+"/admin/inspect/arg/0")
      .map( res => {
        return res.json()
      })
  }



}