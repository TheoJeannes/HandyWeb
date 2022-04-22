import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ConfigModelVariables} from '../../../models/config/config.model.variables';

@Component({
    selector: 'app-configurations-manuelle',
    templateUrl: './configuration-manuelle.component.html',
    styleUrls: ['./configuration-manuelle.component.scss']
})
export class ConfigurationManuelleComponent implements OnInit {


    constructor(private userService: UserService) {}


    ngOnInit(): void {
    }

    resetDefaultConfig(): void {
        this.userService.setSelectedBaseConfig(ConfigModelVariables.defaultConfig);
    }

}
