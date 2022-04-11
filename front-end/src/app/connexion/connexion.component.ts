import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(public formBuilder: FormBuilder, public userService : UserService, public router: Router) {
        this.loginForm = this.formBuilder.group({
            firstName: [''],
            lastName: ['']
        });
    }

    ngOnInit(): void {
    }

    logIn() : void {
        const user : User = this.loginForm.getRawValue() as User
        console.log(user)
        if (this.userService.logIn(user)) {
            console.log('Connexion réussie')
            setTimeout(() => this.router.navigateByUrl('/accueil'), 200);
        } else {
            alert('Erreur de connexion : l\'utilisateur : ' + user.firstName + ' ' + user.lastName + ' n\'existe pas');
            console.log('Connexion échouée')
        }
    }

}
