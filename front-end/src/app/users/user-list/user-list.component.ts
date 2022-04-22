import {Component, OnInit} from '@angular/core';

import {User} from '../../../models/user/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    public userList: User[] = [];

    constructor(private router: Router, private userService: UserService) {
        this.userService.users$.subscribe((users: User[]) => {
            this.userList = users;
        });
    }

    ngOnInit(): void {
    }

    deleteUser(user: User): void {
        this.userService.deleteUser(user);
    }

    editUser(user: User): void {
        this.router.navigate(['/edit-user/' + user.id]);
    }


    addUser(): void{
        let user = {
            firstName: "Default" + this.newId(),
            lastName: "Default",
            role: "user",
            id: this.newId()
        }
        console.log(user);
        this.userService.addUser(user);
        this.editUser(user);
    }

    newId():number{
        if(this.userList.length === 0)
            return 0;
        return Math.max(...this.userList.map(x => x.id)) +1 ;    }
}
