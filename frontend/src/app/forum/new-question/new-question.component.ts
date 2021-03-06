import { Component, OnInit } from '@angular/core';
import { Session } from '../../../services/session.service';
import { DiscussionService } from '../../../services/discussion.service';
import { UserService } from '../../../services/user.service';

import { Router } from '@angular/router'

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
    selector: 'app-new-question',
    templateUrl: './new-question.component.html',
    styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

    private text: any;
    private tags: any;
    private keywords: any;
    private tag_position: any;
    private editor_modules: any;
    private categories: any;

    constructor(
        private session: Session,
        private discussionService: DiscussionService,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.categories = [
            { name: 'Posts', index: 0 },
            { name: 'Questions', index: 1 },
            { name: 'Tutorials', index: 2 },
            { name: 'Tools', index: 3 },
            { name: 'Issues', index: 4 },
            { name: 'Nomenclature', index: 5 }
        ]
        this.keywords = [];
        this.text = '';
        this.tags = [];
        this.tag_position = 0;
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
    }

    post_question(title: string) {
        let date = new Date();
        let user = this.session.get('user')

        let tags = this.keywords.map((i, ix) => {
            return {
                name: i,
                position: ix
            }
        })

        let data = {
            title: title,
            tags: tags,
            body: this.text,
            date: date.toLocaleString(),
            timestamp: date.getTime(),
            _id: date.getTime(),
            user: user['user'],
            institution: user['institution'],
            email: user['email'],
            user_id: user['_id'],
            comments_count: 0,
            comments: [],
            likes: 0,
            views: 1,

        }

        this.discussionService.create_question(data)
            .subscribe(e => {
                this.userService.count_post(data['_id'], this.session.get('user')['_id'])
                    .subscribe(e => {
                        this.router.navigate(['/forum'])
                    });

                this.userService.score_user(this.session.get('user')['_id']).subscribe(e => { })
            });


        this.tag_position = 0;
        this.tags = [];
        // this.router.navigate(['/forum'])

    }

    add_category(key: any) {
        this.keywords.push(key.name)
        this.categories.splice(key.index, 1)
        this.categories.map((i, ix) => {
            i.index = ix;
        })
    }

}
