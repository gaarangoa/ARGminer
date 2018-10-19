import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Location }   from '@angular/common';
import { environment } from '../environments/environment';

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

    this.baseUrl = environment.api_url;


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
    return this.http.get(this.baseUrl+'/get/search/?keyword='+keyword.replace(/\s/g,'')+'&index='+index)
      .map(res => {
        return res.json()
      })
  }

  fast_search(keyword: string, index: string, action: string){
    return this.http.get(this.baseUrl+'/get/fast_search/?keyword='+keyword.replace(/\s/g,'')+'&index='+index+'&action='+action)
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

  predict_nomenclature(parameters: Object){
    return this.http.post(this.baseUrl+'/predict/nomenclature/', parameters)
      .map(res => {
        return res.json()
      })
  }

  get_plasmid(parameters: Object) {
    return this.http.post(this.baseUrl + '/get/plasmid/', parameters)
      .map(res => {
        return res.json();
      });
  }


getDatabaseList(){
  return this.http.get(this.baseUrl+'/get/database/list')
    .map( res => {
      return res.json();
    })
}



}
