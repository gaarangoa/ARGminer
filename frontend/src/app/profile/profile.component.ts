import { Component, OnInit } from '@angular/core';
import { Session } from '../../services/session.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(
      private session: Session
  ) { }

  ngOnInit() {
  }

}
