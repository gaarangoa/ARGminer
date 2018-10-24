import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { environment } from '../environments/environment';


@Injectable()
export class DiscussionService {

  baseUrl: string;

  constructor ( private http:Http){
    this.baseUrl = environment.api_url;
  }


  // ADMIN SECTION
  create_question(fields: object){
    return this.http.post(this.baseUrl+"/forum/question/create/", fields)
      .map( res=>{
        return res.json();
      });
  }

}
