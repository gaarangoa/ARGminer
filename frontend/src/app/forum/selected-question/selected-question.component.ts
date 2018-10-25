import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DiscussionService } from '../../../services/discussion.service'
import { Session } from '../../../services/session.service';

import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';


@Component({
    selector: 'app-selected-question',
    templateUrl: './selected-question.component.html',
    styleUrls: ['./selected-question.component.css'],
})
export class SelectedQuestionComponent implements OnInit {

    private post_id: any;
    private post: any;
    private comment_body: any;
    private trancision: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private postService: DiscussionService,
        private session: Session
    ) { }

    ngOnInit() {
        this.trancision = 'in';
        this.post = [];
        this.comment_body = '';
        this.post_id = this.activatedRoute.snapshot.params.id;
        this.postService.get_post(this.post_id)
            .subscribe(res => {
                console.log(res);
                this.post = res[0];
                this.post.comments.map((i, ix) => {
                    i['index'] = ix;
                });
            });
    }

    add_comment() {
        this.trancision = 'in';
        let date = new Date();
        let user = this.session.get('user')
        let comment = {
            body: this.comment_body,
            user: user['user'],
            email: user['email'],
            institution: user['institution'],
            date: date.toLocaleString(),
            timestamp: date.getTime(),
            _id: date.getTime(),
            post_id: this.post_id
        }

        this.postService.add_comment(comment)
            .subscribe(e => {
                this.post['comments'].push(comment);
                this.comment_body = '';
                this.post.comments.map((i, ix) => {
                    i['index'] = ix;
                });
            });
    }

    remove_comment(comment: any) {
        this.trancision = 'out';
        let comment_id = comment['_id'];
        let post_id = comment['post_id'];
        let index = comment['index'];

        // console.log(comment_id, post_id, index);

        this.postService.remove_comment(comment_id, post_id)
            .subscribe(e => {
                this.post['comments'].splice(index, 1);
                this.post.comments.map((i, ix) => {
                    i['index'] = ix;
                });

            });
    }
}
