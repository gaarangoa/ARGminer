import { Component, OnInit } from '@angular/core';
import { Session } from '../../../services/session.service';
import { DiscussionService } from '../../../services/discussion.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

    private editor_modules: any;
    private text: any;
    private tags: any;
    private post_id: any;
    private post: any;
    private title: string;

    constructor(
        private session: Session,
        private postService: DiscussionService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.text = '';
        this.tags = [];
        this.title = '';

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

        this.post_id = this.activatedRoute.snapshot.params.id;
        this.postService.get_post(this.post_id)
            .subscribe(res => {
                let regex = /<p><br><\/p><p><br><\/p>/gi;
                this.post = res[0];
                this.tags = this.post['tags'].map(e => e.name);
                this.text = this.post['body'].replace(regex, ' ');
                this.title = this.post['title'];
            });

    }

    update_post(title: string) {
        let regex = /<p><br><\/p><p><br><\/p>/gi;

        let tags = this.tags.map((i, ix) => {
            return { name: i, position: ix }
        })

        this.post['body'] = this.text.replace(regex, '');
        this.post['tags'] = tags;
        this.post['title'] = title;

        this.postService.update_post(this.post)
            .subscribe(e => {
                // this.router.navigate(['forum']);
                this.router.navigate(['forum/selected_question', { id: this.post['_id'] }]);
            });



    }

}
