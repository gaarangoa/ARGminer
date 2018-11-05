import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import {CookieService} from 'angular2-cookie/core';
import { Session } from './session.service'

import { environment } from '../environments/environment';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Sha512 } from './encrypt'

@Injectable()
export class UserService {
  private base_url: string;
  private encript: any

  constructor (private http:Http, private session:Session){
    this.base_url = environment.api_url;
    this.encript = new Sha512();
  }

    stats(user_id: string) {
        return this.http.get(this.base_url+'/user/stats/'+user_id)
        .map(res => {
            return res.json();
        })
    }

    count_post(post_id: number, user_id: string) {
        return this.http.post(this.base_url + '/user/add/post/', { post_id: post_id, user_id: user_id })
            .map(res => {
                return res.json();
            });
    }

    count_view(user_id: string, post_id: number) {
        return this.http.post(this.base_url + '/user/sum/views/', { user_id: user_id, post_id: post_id })
            .map(res => {
                return res.json();
            });
    }

    count_comments(user_id: string) {
        return this.http.post(this.base_url + '/user/sum/comments/', { user_id: user_id })
            .map(res => {
                return res.json();
            });
    }

    count_followers(follower_id: string, user_id: string) {
        return this.http.post(this.base_url + '/user/add/followers/', { user_id: user_id, follower_id: follower_id })
            .map(res => {
                return res.json();
            });
    }

    count_following(user_id: string, following_id: string) {
        return this.http.post(this.base_url + '/user/add/following/', { user_id: user_id, following_id: following_id })
            .map(res => {
                return res.json();
            });
    }

    count_unfollowing(user_id: string, following_id: string) {
        return this.http.post(this.base_url + '/user/remove/following/', { user_id: user_id, following_id: following_id })
            .map(res => {
                return res.json();
            });
    }

    change_password(data: any) {
        return this.http.post(this.base_url + '/user/password/update/', data)
            .map(res => {
                return res.json()
            })
    }

    change_info(_id: any, key: any, value: any) {
        return this.http.post(this.base_url + '/user/info/update/', { _id: _id, key: key, value: value })
            .map(res => {
                return res.json()
            })
    }

}
