import {Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {UserService} from './user.service';
import {GraphicalAdaptationService} from './graphical-adaptation.service';

@Injectable({
    providedIn: 'root'
})


export class RouterQuitConfigFormService {
    private quitConfigFormWithoutSaving: boolean = true;

    constructor(private router: Router,
                private userService: UserService,
                private graphicalService: GraphicalAdaptationService) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.router.url === "/config/form" && this.quitConfigFormWithoutSaving) {
                    this.graphicalService.setStyle(this.userService.configSelected$.getValue())
                }
            }
        })
    }

    setQuitConfigFormWithoutSaving(value: boolean): void {
        this.quitConfigFormWithoutSaving = value;
    }
}
