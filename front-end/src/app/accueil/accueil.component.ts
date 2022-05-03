import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

    public admin = true;
    public offset = false;

    constructor(public userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.userSelected$.subscribe(() => {
            this.admin = this.userService.isRoleAdmin()
            this.offset = this.userService.isOffset()
            console.log(this.admin)
        });
    }
}
