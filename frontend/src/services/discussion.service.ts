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
    return this.http.post(this.baseUrl+"/forum/post/create/", fields)
      .map( res=>{
        return res.json();
      });
  }

    get_posts(fields: object) {
        return this.http.post(this.baseUrl+"/forum/post/get/latest/", fields)
        .map( res=>{
          return res.json();
        });
    }

    get_post(post_id: string) {
        return this.http.get(this.baseUrl+"/forum/post/get/one/"+post_id)
        .map( res=>{
          return res.json();
        });
    }


    add_comment(fields: object) {
        return this.http.post(this.baseUrl+"/forum/post/add/comment/", fields)
        .map( res=>{
          return res.json();
        });
    }

    remove_post(_id: number) {
        return this.http.get(this.baseUrl + "/forum/post/remove/" + _id)
            .map(res => {
                return res.json();
            });
    }

    remove_comment(comment_id: any, post_id: any) {
        return this.http.get(this.baseUrl + "/forum/post/remove/comment?post_id=" + post_id + '&comment_id=' + comment_id)
            .map(res => {
                return res.json();
            });
    }

    update_post(data: any) {
        return this.http.post(this.baseUrl+"/forum/post/update/", data)
        .map( res=>{
          return res.json();
        });
    }

}
