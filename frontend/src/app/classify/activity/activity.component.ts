import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public best_users: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.top_scores(10)
      .subscribe(res => {
        this.best_users = res;
      })
  }

}
