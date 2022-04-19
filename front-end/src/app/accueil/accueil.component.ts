import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/services/user.service';
import {Config} from "../../models/config.model";

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
    private config: Config;

    constructor(private userService: UserService) {
        this.userService.configSelected$.subscribe((config) => {
            this.config = config;
        });
    }

    ngOnInit(): void {
        //while (this.config === undefined){}
        document.documentElement.style.setProperty('--button-color', '#1e98d7');
        document.documentElement.style.setProperty('--button-hover-color', '#166791');
        document.documentElement.style.setProperty('--button-font-color', '#FFFFFF');
        console.log("config");
        console.log(this.config);
        document.documentElement.style.setProperty('--button-font-size', this.config.size.toString()+'px');
    }
}
