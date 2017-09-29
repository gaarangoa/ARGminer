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

  getCuratedARGs(ixg: any){
    return this.http.get(this.baseUrl+"/admin/inspect/arg/"+ixg)
      .map( res => {
        return res.json();
      });
  }

  updateGene(fields: object){
    return this.http.post(this.baseUrl+"/admin/update/arg/", fields)
      .map( res=>{
        return res.json();
      });
  }

  updateConfilctingARGs(){
    return this.http.get(this.baseUrl+"/admin/update/conflict/arg/")
      .map( res => {
        return res.json();
      });
  }

  login(cred: any){
    return this.http.post(this.baseUrl+"/admin/login/", cred)
      .map( res => {
          return res.json();
      });
  }

  upgradeDatabase(cred: any){
    return this.http.post(this.baseUrl+"/admin/upgrade/database/", cred)
      .map( res => {
          return res.json();
      });
  }

}