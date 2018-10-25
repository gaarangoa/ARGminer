import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DiscussionService } from '../../../services/discussion.service'
import { Session } from '../../../services/session.service';
@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
    public masonryItems: any;
    private maso_options: any;
    constructor(
        private router: Router,
        private postService: DiscussionService,
        private session: Session
  ) { }

    ngOnInit() {
        this.maso_options = {
            transitionDuration: '0.8',

        }
        this.masonryItems = [];

        // get top 10 posts
        this.get_top_n_posts()
    }

    go_to_question(question_id: any) {
        // console.log(question_id);
        this.router.navigate(['forum/selected_question', {id: question_id}])
    }

    get_top_n_posts() {
        this.postService.get_posts({_from: 0, _to: 10})
            .subscribe(e => {
                this.masonryItems = e;
                this.masonryItems.map((i, ix) => {
                    i['index'] = ix
                })
            });
    }

    remove_post(item_id: any, index: any) {
        this.postService.remove_post(item_id)
            .subscribe(e => {
                console.log(item_id, index);
                this.masonryItems.splice(index, 1);
            })

    }

}
