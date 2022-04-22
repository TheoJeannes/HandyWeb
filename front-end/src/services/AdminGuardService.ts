import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {UserService} from "./user.service";
import {User} from "../models/user/user.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AdminGuardService implements CanActivate {

    private user: User;

    constructor(private userService: UserService, private router: Router) {
        this.userService.userSelected$.subscribe(user => this.user = user);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log("User AuthGuard ", this.user);
        if (this.user == undefined) {
            this.router.navigate(['/connexion']);
            console.log("blocked AdminGuard : undefined");
            return false;
        } else {
            if (this.user.role !== "admin") {
                console.log("blocked AdminGuard : not admin");
                this.router.navigate(['/accueil']);
                return false;
            }
        }
        console.log("passed AdminGuard");
        return true;
    }
}
