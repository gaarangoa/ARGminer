import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DiscussionService } from '../../../services/discussion.service'
import { Session } from '../../../services/session.service';
import { UserService } from '../../../services/user.service';

import { Meta } from '@angular/platform-browser';

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
    selector: 'app-selected-question',
    templateUrl: './selected-question.component.html',
    styleUrls: ['./selected-question.component.css'],
})
export class SelectedQuestionComponent implements OnInit {
    private user_image: string;
    private post_id: any;
    private post: any;
    private comment_body: any;
    private editor_modules: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private postService: DiscussionService,
        private session: Session,
        private meta: Meta,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.user_image = this.user_image = 'https://api.adorable.io/avatars/' + this.session.get('user')['email'];

        // tags for sharing
        this.meta.addTag({ name: 'twitter:card', content: 'summary' });
        this.meta.addTag({ name: 'twitter:site', content: '@gaarangoa' });
        this.meta.addTag({ name: 'twitter:title', content: 'Front-end Web Development, Chewed Up' });
        this.meta.addTag({ name: 'twitter:description', content: 'Learn frontend web development...' });
        this.meta.addTag({ name: 'twitter:image', content: 'https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg' });

        // variables
        this.post = [];
        this.comment_body = '';

        // Editor
        this.editor_modules = {
            toolbar: {
                container: [
                    [{ 'font': [] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'align': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    ['blockquote', 'code-block'],
                    [{ 'color': [] }, { 'background': [] }],
                    ['link', 'image', 'video']
                ]
            },
            imageResize: true
        };

        // post
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
            post_id: this.post_id,
            owner_email: this.post['email']
        }

        this.postService.add_comment(comment)
            .subscribe(e => {
                this.post['comments'].push(comment);
                this.comment_body = '';
                this.post.comments.map((i, ix) => {
                    i['index'] = ix;
                });

                // add count to user comments
                this.userService.count_comments(this.post['user_id'])
                    .subscribe(e => { });

                this.userService.score_user(this.session.get('user')['_id']).subscribe(e => { })

            });
    }

    remove_comment(comment: any) {
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
