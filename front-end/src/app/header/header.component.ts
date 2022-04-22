import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user/user.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public user: User;

    constructor(public userService: UserService) {
        this.userService.userSelected$.subscribe((user) => this.user = user);
    }

    ngOnInit() {
    }

    disconnectUser(): void {
        this.userService.disconnect()
    }
}
