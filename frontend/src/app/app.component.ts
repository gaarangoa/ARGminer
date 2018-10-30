import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Session } from '../services/session.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    private role: any;
    constructor(
        private session: Session,
        private router: Router
    ) { }

    logout() {
        this.session.removeAll()
        this.router.navigate(['home/'])
    }

    open_instructions() {
        this.router.navigate(["/forum/selected_question", {id:1540586923155}]);
    }

}
