import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {Config} from '../../models/config.model';

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

    private configExcentrement: Config = {
        name: "excentrement",
        size: 5
    }

    private configConstraste: Config = {
        name: "constraste",
        size: 20
    }

    private configExcentrementContraste: Config = {
        name: "excentrement + constraste",
        size: 30
    }

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
        if (user.password) {
            if (this.userService.logInAdmin(user)) {
                console.log('Connexion réussie')
                setTimeout(() => this.router.navigate(['/accueil']), 200);
            } else{
                alert('Erreur de connexion : l\'utilisateur : ' + user.firstName + ' ' + user.lastName + ' n\'existe pas');
                console.log('Connexion échouée')
            }
        }
        else {
            if (this.userService.logInUser(user)) {
                console.log('Connexion réussie')
                setTimeout(() => this.router.navigate(['/accueil']), 200);
            } else {
                alert('Erreur de connexion : l\'utilisateur : ' + user.firstName + ' ' + user.lastName + ' n\'existe pas');
                console.log('Connexion échouée')
            }
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
            config = this.configExcentrementContraste
        } else if (this.contrasteButtonOn) {
            config = this.configConstraste
        } else {
            config = this.configExcentrement
        }

        this.userService.setSelectedBaseConfig(config);
    }
}
