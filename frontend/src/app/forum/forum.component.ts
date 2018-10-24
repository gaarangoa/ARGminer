import { Component, OnInit } from '@angular/core';
import { Session } from '../../services/session.service';

@Component({
	selector: 'app-forum',
	templateUrl: './forum.component.html',
	styleUrls: [ './forum.component.css' ]
})
export class ForumComponent implements OnInit {
	text: string;

    constructor(
        private session:Session
    ) {}

	ngOnInit() {
		this.text = '';
	}
}
