import { Component, OnInit } from '@angular/core';
import { Session } from '../../services/session.service'

import { Sha512 } from '../../services/encrypt';

interface credentials{
    username: string,
    password: string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    private encrypt: any;

    constructor(
      private session: Session
    ) {}

    ngOnInit() {
        this.encrypt = new Sha512();
    }


}
