import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ThemeService} from "../../../services/theme.service";
import {Theme} from "../../../models/theme.model";
import {Router} from '@angular/router';

@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {
    public themeForm: FormGroup;

    constructor(private router: Router, public formBuilder: FormBuilder, public themeService: ThemeService) {
        this.themeForm = this.formBuilder.group({
            name: [''],
            image: ['']
        });
    }

    ngOnInit(): void {
    }

    addTheme(): void {
        // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
        const themeToCreate: Theme = this.themeForm.getRawValue() as Theme;
        this.themeService.addTheme(themeToCreate);

        this.router.navigate(['theme-selection']);
    }
}
