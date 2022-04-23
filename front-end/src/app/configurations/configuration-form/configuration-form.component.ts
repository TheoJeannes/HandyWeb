import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Config} from '../../../models/config/config.model';
import {ConfigModelVariables} from '../../../models/config/config.model.variables';

@Component({
    selector: 'app-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {

    public config: Config = {
        id: Date.now(),
        name: Math.floor(Math.random() * 100000000) + '',
        size: ConfigModelVariables.defaultConfig.size,
        colorButtons: ConfigModelVariables.defaultConfig.colorButtons,
        font: ConfigModelVariables.defaultConfig.font
    };

    constructor(private userService: UserService, public configVariables: ConfigModelVariables) {

    }

    ngOnInit(): void {
    }

    addConfig(): void {
        this.userService.addConfig(this.config);
        this.userService.setSelectedUserConfig(this.config);
        this.config.name = Math.floor(Math.random() * 100000000) + '';
        this.config.id = Date.now();
    }

}
