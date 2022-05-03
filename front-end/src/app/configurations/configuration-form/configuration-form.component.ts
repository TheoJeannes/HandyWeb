import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Config} from '../../../models/config/config.model';
import {ConfigModelVariables} from '../../../models/config/config.model.variables';
import {Router} from '@angular/router';
import {GraphicalAdaptationService} from '../../../services/graphical-adaptation.service';
import {RouterQuitConfigFormService} from '../../../services/router-quit-config-form.service';

@Component({
    selector: 'app-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {

    public offset = false;

    public config: Config = {
        id: Date.now(),
        name: Math.floor(Math.random() * 100000000) + '',
        size: ConfigModelVariables.defaultConfig.size,
        colorButtons: ConfigModelVariables.defaultConfig.colorButtons,
        font: ConfigModelVariables.defaultConfig.font,
        horizontalEccentricity: ConfigModelVariables.defaultConfig.horizontalEccentricity,
        verticalEccentricity: ConfigModelVariables.defaultConfig.verticalEccentricity
    };

    constructor(private userService: UserService,
                public configVariables: ConfigModelVariables,
                private router : Router,
                private graphicalService : GraphicalAdaptationService,
                private routerQuitService: RouterQuitConfigFormService) {
    }

    ngOnInit(): void {
        this.offset=this.userService.isOffset()
        this.routerQuitService.setQuitConfigFormWithoutSaving(true);
    }

    updateStyle(){
        console.log(this.config);
        console.log("test");
        this.graphicalService.setStyle(this.config);
    }


    addConfig(): void {
        this.userService.addConfig(this.config);
        this.userService.setSelectedUserConfig(this.config);
        this.config.name = Math.floor(Math.random() * 100000000) + '';
        this.config.id = Date.now();
        this.routerQuitService.setQuitConfigFormWithoutSaving(false);
        this.router.navigate(['/config/manuel']);
    }
}
