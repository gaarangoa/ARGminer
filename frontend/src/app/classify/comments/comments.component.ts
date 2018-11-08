import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Session } from '../../../services/session.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    public messages: any;
    public date: any;
    constructor(
        private dataService: DataService,
        private session: Session
  ) { }

    ngOnInit() {
        this.date = new Date();
        let timestamp = this.date.getTime()
        this.messages = [
            {
                user: 'ARGminer Admin',
                institution:'Virginia Tech',
                date: this.date.toLocaleString(),
                timestamp: timestamp,
                message: 'Welcome to ARGminer, if you have any comment regarding the ARG, or want to start a discussion, just leave a message in the box below. Thanks!',
                image: 'assets/images/admin.svg',
                credit: "<a href='https://www.freepik.com/free-vector/programmers-concept-with-flat-design_2546443.htm'>Designed by Freepik</a>"
            }
        ]
    }


    send_message(event) {
        if (event.key === "Enter") {
            this.date = new Date();
            this.messages.push({
                user: this.session.get('online')>=1 ? this.session.get('user')['user']: 'unregistered user',
                institution: this.session.get('online')>=1 ? this.session.get('user')['institution']:'unknown',
                message: event.target.value,
                image: 'assets/images/user1.svg',
                date: this.date.toLocaleString(),
                timestamp: this.date.getTime()
            });

            // clean form
            event.target.value = '';

          }
    }

    send_message_click(event) {

        this.date = new Date();
        this.messages.push({
            user: this.session.get('online')>=1 ? this.session.get('user')['user']: 'unregistered user',
            institution: this.session.get('online')>=1 ? this.session.get('user')['institution']:'unknown',
            message: event.value,
            image: 'assets/images/user1.svg',
            date: this.date.toLocaleString(),
            timestamp: this.date.getTime()
        });

        // clean form
        event.value = '';
    }


}
