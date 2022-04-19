import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-configurations-manuelle',
    templateUrl: './configuration-manuelle.component.html',
    styleUrls: ['./configuration-manuelle.component.scss']
})
export class ConfigurationManuelleComponent implements OnInit {


    constructor(public userService: UserService) {}


    ngOnInit(): void {
    }

    resetDefaultConfig(): void {
        this.userService.setSelectedBaseConfig(this.userService.defaultConfig);
    }

}
