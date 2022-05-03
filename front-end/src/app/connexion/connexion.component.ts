import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user/user.model';
import {Router} from '@angular/router';
import {Config} from '../../models/config/config.model';
import {ConfigModelVariables} from '../../models/config/config.model.variables';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

    public loginForm: FormGroup;
    public adminButtonOn: boolean = false;
    public excentrementButtonOn: boolean = false;
    public contrasteButtonOn: boolean = false;

    constructor(public formBuilder: FormBuilder, public userService: UserService, public router: Router) {
        this.loginForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            password: ['']
        });
    }

    ngOnInit(): void {
    }

    public logIn(): void {
        const user: User = this.loginForm.getRawValue() as User;
        let ErrorMessage: string;
        if (this.adminButtonOn) {
            ErrorMessage = this.userService.logInAdmin(user);
            this.router.navigate(['/accueil']);
        } else {
            ErrorMessage = this.userService.logInUser(user);
            this.router.navigate(['/accueil']);
        }

        this.printErrorMessage(ErrorMessage);
    }

    public adminButton(): void {
        this.adminButtonOn = !this.adminButtonOn;
    }

    public excentrementButton(): void {
        this.excentrementButtonOn = !this.excentrementButtonOn;
        console.log(this.excentrementButtonOn);
        this.removeAdminField();
        this.setConfig();
    }

    public contrasteButton(): void {
        this.contrasteButtonOn = !this.contrasteButtonOn;
        console.log(this.contrasteButtonOn);
        this.removeAdminField();
        this.setConfig();
    }

    public setConfig(): void {
        let config: Config;
        if (this.contrasteButtonOn && this.excentrementButtonOn) {
            config = ConfigModelVariables.configExcentrementContraste;
        } else if (this.contrasteButtonOn) {
            config = ConfigModelVariables.configConstraste;
        } else if (this.excentrementButtonOn) {
            config = ConfigModelVariables.configExcentrement;
        } else {
            config = ConfigModelVariables.defaultConfig;
        }

        this.userService.setSelectedBaseConfig(config);
    }

    public printErrorMessage(message: string) {
        document.getElementById("error-message").innerText = message;
    }

    private removeAdminField(): void {
        this.adminButtonOn = false;
        this.loginForm.patchValue({password : ''})
    }
}
