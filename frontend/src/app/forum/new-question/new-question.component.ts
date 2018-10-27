import { Component, OnInit } from '@angular/core';
import { Session } from '../../../services/session.service';
import { DiscussionService } from '../../../services/discussion.service'
import { Router } from '@angular/router'

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);


@Component({
	selector: 'app-new-question',
	templateUrl: './new-question.component.html',
	styleUrls: [ './new-question.component.css' ]
})
export class NewQuestionComponent implements OnInit {

    private text: any;
    private tags: any;
    private keywords: any;
    private tag_position: any;
    private editor_modules: any;

    constructor(
        private session: Session,
        private discussionService: DiscussionService,
        private router: Router
    ) {}

    ngOnInit() {
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
                  [{ 'script': 'sub'}, { 'script': 'super' }],
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
            comments_count: 0,
            comments: [],
            likes: 0,
            views: 1,

        }

        this.discussionService.create_question(data)
            .subscribe(e => {
                console.log(e);
        });

        this.tag_position = 0;
        this.tags = [];
        this.router.navigate(['/forum'])

    }

}
