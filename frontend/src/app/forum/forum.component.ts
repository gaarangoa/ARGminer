import { Component, OnInit } from '@angular/core';
import { Session } from '../../services/session.service';
import { SelectItem } from 'primeng/primeng';


@Component({
	selector: 'app-forum',
	templateUrl: './forum.component.html',
	styleUrls: [ './forum.component.css' ]
})
export class ForumComponent implements OnInit {
    private navigation_options: SelectItem[];

    constructor(
        private session:Session
    ) {}

	ngOnInit() {
        this.navigation_options = [
            { label: 'Posts', value: 1 },
            { label: 'Questions', value: 2 },
            { label: 'ARGminer Issues', value: 3 },
            { label: 'DeepARG Issues', value: 4 },
            { label: 'NanoARG Issues', value: 5 },
            { label: 'MetaStorm Issues', value: 6 },
        ];
	}
}
