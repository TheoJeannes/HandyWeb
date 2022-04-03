import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        document.documentElement.style.setProperty('--button-color', '#1e98d7');
        document.documentElement.style.setProperty('--button-hover-color', '#166791');
        document.documentElement.style.setProperty('--button-font-size', '22');
        document.documentElement.style.setProperty('--button-font-color', '#FFFFFF');
    }
}
