import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

    @Input()
    user: User;


    constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
        this.userService.userToModify$.subscribe((user) => this.user = user);
    }

    ngOnInit(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.userService.setUserToModify(id);
        console.log(this.user);
    }

    editUser(): void {
        this.userService.editUser(this.user);
        this.router.navigate(['/user-list']);
    }
}
