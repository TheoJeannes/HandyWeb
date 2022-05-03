import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {UserService} from "./user.service";
import {User} from "../models/user/user.model";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
    constructor(public userService: UserService, public router: Router) {}


    canActivate(): boolean {
        let user: User;
        this.userService.userSelected$.subscribe((u) => user = u);
        if (user == undefined) {
            this.router.navigate(['/connexion']);
            return true;
        }
        return true;
    }
}
