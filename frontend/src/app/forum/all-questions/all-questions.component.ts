import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DiscussionService } from '../../../services/discussion.service'
import { Session } from '../../../services/session.service';
import { ConfirmationService } from 'primeng/primeng';


import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
    public masonryItems: any;

    constructor(
        private router: Router,
        private postService: DiscussionService,
        private session: Session,
        private confirmationService: ConfirmationService
  ) { }

    ngOnInit() {
        this.masonryItems = [];
        // get top 10 posts
        this.get_top_n_posts()

        TimeAgo.locale(en)
    }

    go_to_question(question_id: any) {
        // console.log(question_id);
        this.router.navigate(['forum/selected_question', {id: question_id}])
    }

    edit_question(question_id: any) {
        // console.log(question_id);
        this.router.navigate(['forum/edit_question', {id: question_id}])
    }

    get_top_n_posts() {
        this.postService.get_posts({_from: 0, _to: 10})
            .subscribe(e => {

                this.masonryItems = e;
                const timeAgo = new TimeAgo('en-US');
                this.masonryItems.map((i, ix) => {
                    i['index'] = ix
                    i['time_ago'] = timeAgo.format(i['timestamp']);
                });

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
