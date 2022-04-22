import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {Config} from '../../models/config/config.model';
import {ConfigVariableModel} from '../../models/config/config.variable.model';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

    public loginForm: FormGroup;
    public adminButtonOn: boolean = false;
    private excentrementButtonOn: boolean = false;
    private contrasteButtonOn: boolean = false;
    private i = 0;

    constructor(public formBuilder: FormBuilder, public userService : UserService, public router: Router) {
        this.loginForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            password: ['']
        });
    }

    ngOnInit(): void {
    }

    public logIn() : void {
        const user : User = this.loginForm.getRawValue() as User
        if (this.adminButtonOn) {
            this.userService.logInAdmin(user);
            this.router.navigate(['/accueil']);
        } else {
            this.userService.logInUser(user);
            this.router.navigate(['/accueil']);
        }
    }

    public adminButton(): void {
        if (this.i++ % 2 == 0) {
            this.adminButtonOn = !this.adminButtonOn;
        }
    }

    public excentrementButton(): void {
        if (this.i++ % 2 == 0) {
            this.excentrementButtonOn = !this.excentrementButtonOn;
            console.log(this.excentrementButtonOn);
        }
        this.setConfig();
    }

    public constarsteButton(): void {
        if (this.i++ % 2 == 0) {
            this.contrasteButtonOn = !this.contrasteButtonOn;
            console.log(this.contrasteButtonOn);
        }
        this.setConfig();
    }

    public setConfig(): void {
        let config: Config;
        if (this.contrasteButtonOn && this.excentrementButtonOn) {
            config = ConfigVariableModel.configExcentrementContraste;
        } else if (this.contrasteButtonOn) {
            config = ConfigVariableModel.configConstraste
        } else {
            config =  ConfigVariableModel.configExcentrement
        }

        this.userService.setSelectedBaseConfig(config);
    }
}
