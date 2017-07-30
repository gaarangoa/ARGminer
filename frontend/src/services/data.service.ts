import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class DataService {
  
  ARG: Object;
  ATYPE: any;
  
  constructor (private http:Http){
    this.ARG = [];
  }

  getRandomKnownARG() {
    return this.http.get('http://localhost:5001/get/arg/random/')
      .map(res => {
        try {
          this.ARG = res.json()
        } catch (error) {
          this.ARG = {"status":false}
        }
        
      })
  }

  getKnownARGInfo(gene_id: string){
    return this.http.get('http://localhost:5001/get/arg/'+gene_id)
      .map(res => {
        this.ARG = res.json()
      })
  }


  getListAntibioticClass(){
    return this.http.get('http://localhost:5001/get/antibiotic/class')
      .map(res => {
        this.ATYPE = res.json()
      })
  }

  insertCuration(curation: Object){
    return this.http.post('http://localhost:5001/post/curation', curation)
      .map(res => {
        return res.json()
      })
  }

}