import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Location }   from '@angular/common';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class DataService {
  
  ARG: Object;
  ATYPE: any;
  host: string; 
  baseUrl: string;
  randomConflictingArgSubtype: Object;
  
  constructor ( private http:Http,
                private location: Location
              ){
    
    if(location['_platformStrategy']._platformLocation._location.hostname == "localhost"){
      this.baseUrl = location['_platformStrategy']._platformLocation._location.protocol + '//' + location['_platformStrategy']._platformLocation._location.hostname+":5001"
    }else{
      this.baseUrl = location['_platformStrategy']._platformLocation._location.protocol + '//' + location['_platformStrategy']._platformLocation._location.hostname+"/argpedia_api"
    }
    
    
    this.ARG = [];
    this.randomConflictingArgSubtype = [];
    
  }

  getRandomConflictingArgSubtype(){
    return this.http.get(this.baseUrl+'/get/subtype/random/')
      .map( res=> {
        this.randomConflictingArgSubtype = res.json();
      })
  }

  getRandomKnownARG() {
    // console.log(this.baseUrl)
    return this.http.get(this.baseUrl+'/get/arg/random/')
      .map(res => {
        try {
          this.ARG = res.json()
        } catch (error) {
          this.ARG = {"status":false}
        }
        
      })
  }

  searchAPI(keyword: string, index: string){
    return this.http.get(this.baseUrl+'/get/search/?keyword='+keyword+'&index='+index)
      .map(res => {
        return res.json()
      })
  }

  getKnownARGInfo(gene_id: string){
    return this.http.get(this.baseUrl+'/get/arg/info/'+gene_id)
      .map(res => {
        this.ARG = res.json()
      })
  }

  getListAntibioticClass(){
    return this.http.get(this.baseUrl+'/get/antibiotic/class')
      .map(res => {
        this.ATYPE = res.json()
      })
  }

  getListAntibioticGroup(){
    return this.http.get(this.baseUrl+'/get/antibiotic/group')
      .map(res => {
        this.ATYPE = res.json()
      })
  }

  insertCuration(curation: Object){
    curation['gene_id'] = this.ARG['entry']['gene_id'];
    console.log(curation)
    return this.http.post(this.baseUrl+'/post/curation', curation)
      .map(res => {
        return res.json()
      })
  }




}