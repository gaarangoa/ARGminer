import { Component, OnInit } from '@angular/core';
import { Session } from '../../services/session.service'
import { UserService } from '../../services/user.service';
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
    private pass: any;
    private info: any;
    private description: string;

    constructor(
        private session: Session,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.pass = { pass1: '', pass2: '', pass3: '' }
        this.info = { username: this.session.get('user')['email'], fullname: this.session.get('user')['user'], institution: this.session.get('user')['institution'], email: this.session.get('user')['email'] }
        this.description = ''
        this.encrypt = new Sha512();
    }

    change_info(key: string) {
        console.log(key, this.info[key]);
        this.userService.change_info(this.session.get('user')['_id'], key, this.info[key])
            .subscribe(e => {
                alert(e['message']);
            })
    }

    change_password() {
        let pass1 = this.encrypt.SHA512(this.pass.pass1).toString()
        let pass2 = this.encrypt.SHA512(this.pass.pass2).toString()
        let pass3 = this.encrypt.SHA512(this.pass.pass3).toString()
        this.pass = { pass1: '', pass2: '', pass3: '' }

        if (pass2 != pass3) {
            alert("passwords don't match")
        } else {
            this.userService.change_password({ _id: this.session.get('user')['_id'], pass1: pass1, pass2: pass2 })
                .subscribe(e => {
                    alert(e['message']);
                })
        }


    }

}
