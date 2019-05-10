import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service'
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public best_users: any;
  public alive: boolean;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.alive = true;


    TimerObservable.create(0, 5000)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.userService.top_scores(10)
          .subscribe(res => {
            this.best_users = res;
          })
      });

  }


  ngOnDestroy() {
    this.alive = false;
  }

}
