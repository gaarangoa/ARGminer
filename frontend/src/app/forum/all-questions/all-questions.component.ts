import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DiscussionService } from '../../../services/discussion.service'
import { Session } from '../../../services/session.service';
import { UserService } from '../../../services/user.service';
import { ConfirmationService } from 'primeng/primeng';
import {Observable} from 'rxjs';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
    public masonryItems: any;
    private _from: number;
    private _to: number;
    private selected_category: any;

    constructor(
        private router: Router,
        private postService: DiscussionService,
        private session: Session,
        private confirmationService: ConfirmationService,
        private userService: UserService,
        private activatedRoute: ActivatedRoute
    ) {
  }

    ngOnInit() {
        this.selected_category = this.activatedRoute.snapshot.params.mode ? this.activatedRoute.snapshot.params.mode.split(','):'All';
        this._from = 0;
        this._to = 5;
        this.masonryItems = [];
        // get top 10 posts
        this.get_top_n_posts()
        TimeAgo.locale(en)

        this.activatedRoute.params.subscribe(val => {
            this._from = 0;
            this._to = 5;
            this.selected_category = this.activatedRoute.snapshot.params.mode ? this.activatedRoute.snapshot.params.mode.split(','):'All';
            this.get_top_n_posts();
        })

    }

    go_to_question(question: any) {
        // console.log(question_id);
        this.userService.count_view(question['user_id'], question['_id'])
            .subscribe(e => {
                this.router.navigate(['forum/selected_question', {id: question._id}])
            })
    }

    follow_post(question: any) {
        if (question.am_I_following === 'FOLLOW') {
            question.am_I_following = 'UNFOLLOW';
            this.userService.count_following(this.session.get('user')['_id'], question['_id'])
                .subscribe(e => {})
        } else {
            question.am_I_following = 'FOLLOW';
            this.userService.count_unfollowing(this.session.get('user')['_id'], question['_id'])
                .subscribe(e => { })
        }
    }

    edit_question(question_id: any) {
        // console.log(question_id);
        this.router.navigate(['forum/edit_question', {id: question_id}])
    }

    get_top_n_posts() {
        this.postService.get_posts({_from: this._from, _to: this._to, category: this.selected_category})
            .subscribe(e => {
                this.masonryItems = e;
                const timeAgo = new TimeAgo('en-US');
                this.masonryItems.map((i, ix) => {
                    i['index'] = ix
                    i['time_ago'] = timeAgo.format(i['timestamp']);
                    i['am_I_following'] = i['followers'].filter(e => e.status === true && e._id === this.session.get('user')['_id']).length > 0 ? 'UNFOLLOW' : 'FOLLOW';
                });
            });
    }

    get_more_posts() {
        this._from = this._to;
        this._to = this._from + 5;

        this.postService.get_posts({_from: this._from, _to: this._to, category: this.selected_category})
            .subscribe(e => {

                this.masonryItems = this.masonryItems.concat(e);
                const timeAgo = new TimeAgo('en-US');
                this.masonryItems.map((i, ix) => {
                    i['index'] = ix
                    i['time_ago'] = timeAgo.format(i['timestamp']);
                    i['am_I_following'] = i['followers'].filter(e => e.status === true && e._id === this.session.get('user')['_id']).length > 0 ? 'UNFOLLOW' : 'FOLLOW';
                });


                console.log(this.masonryItems)
            });
    }

    remove_post(item_id: any, index: any) {

        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this.postService.remove_post(item_id)
                    .subscribe(e => {
                        console.log(item_id, index);
                        this.masonryItems.splice(index, 1);
                        this.masonryItems.map((i, ix) => {
                            i['index'] = ix
                        })
                    });
            }
        });



    }


}
