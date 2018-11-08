import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Session } from '../../../services/session.service';

interface Stats {
    score: number,
    posts: number,
    inspections: number,
    views: number,
    comments: number,
    followers: number
}

@Component({
	selector: 'app-profile-stats',
	templateUrl: './stats.component.html',
	styleUrls: [ './stats.component.css' ]
})
export class StatsComponent implements OnInit {
    private stats: Stats;
    constructor(
        private userService: UserService,
        private session: Session
    ) {}

    ngOnInit() {
        this.stats = {
            score: 0,
            posts: 0,
            inspections: 0,
            views: 0,
            comments: 0,
            followers: 0
        }
        console.log(this.session.get('user')['_id'])
        this.userService.stats(this.session.get('user')['_id'])
            .subscribe(e => {
                this.stats = {
                    score: e['posts'].length+e['inspections'].length+0.5*e['views']+e['comments']+e['followers'].length,
                    posts: e['posts'].length,
                    inspections: e['inspections'].length,
                    views: e['views'],
                    comments: e['comments'],
                    followers: e['followers'].length
                }
            })


    }
}
