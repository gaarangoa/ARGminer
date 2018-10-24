import { Component, OnInit } from '@angular/core';
import { Session } from '../../../services/session.service';
import { DiscussionService } from '../../../services/discussion.service'

@Component({
	selector: 'app-new-question',
	templateUrl: './new-question.component.html',
	styleUrls: [ './new-question.component.css' ]
})
export class NewQuestionComponent implements OnInit {

    private text: any;

    constructor(
        private session: Session,
        private discussionService: DiscussionService
    ) {}

    ngOnInit() {
        this.text = '';
    }

    post_question(title: string, tags: string) {
        let date = new Date();
        let user = this.session.get('user')

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
            likes: 0

        }

        console.log(data);

        this.discussionService.create_question(data)
            .subscribe(e => {
                console.log(e);
            });

    }

}
