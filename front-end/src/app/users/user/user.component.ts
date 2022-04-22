import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {User} from '../../../models/user/user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    @Input()
    user: User;

    @Output()
    deleteUser: EventEmitter<User> = new EventEmitter<User>();

    @Output()
    editUser: EventEmitter<User> = new EventEmitter<User>();

    constructor() {
    }

    ngOnInit(): void {
    }

    delete(): void {
        this.deleteUser.emit(this.user);
    }

    edit(): void {
        this.editUser.emit(this.user);
    }

}
