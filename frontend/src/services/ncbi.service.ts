import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class NcbiService {

  reference: any;

  constructor (private http:Http){

  }

  getPubMed(pubMedID: string) {
    return this.http.get('https://www.ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/RESTful/tmTool.cgi/BioConcept/'+pubMedID+'/JSON/')
      .map(res => {
        // this.reference = res.json()
        // console.log(res.json())
        try {
          return res.json()
        } catch (error) {
          console.log(res)
          return res.json()
        }

      })
  }


}
