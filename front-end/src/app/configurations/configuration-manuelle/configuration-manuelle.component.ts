import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ConfigModelVariables} from '../../../models/config/config.model.variables';
import {Router} from '@angular/router';

@Component({
    selector: 'app-configurations-manuelle',
    templateUrl: './configuration-manuelle.component.html',
    styleUrls: ['./configuration-manuelle.component.scss']
})
export class ConfigurationManuelleComponent implements OnInit {

    public offset = false;

    constructor(public router: Router ,private userService: UserService) {}


    ngOnInit(): void {
    this.offset=this.userService.isOffset()
    }

    resetDefaultConfig(): void {
        this.userService.setSelectedBaseConfig(ConfigModelVariables.defaultConfig);
    }

    configList() {
        this.router.navigate(['/config/list']);
    }

    configForm() {
        this.router.navigate(['/config/form']);
    }
}
