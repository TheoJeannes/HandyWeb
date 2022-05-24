import {Component, Input, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme.service';
import {Theme} from '../../../models/theme.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

    @Input()
    theme: Theme;

    constructor(private router: Router, private route: ActivatedRoute, private themeService: ThemeService) {
        this.themeService.themeSelected$.subscribe((theme) => this.theme = theme);
    }

    ngOnInit(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.themeService.setSelectedTheme(id);
    }

    editTheme(): void {
        this.themeService.editTheme(this.theme);
        this.router.navigate(['theme-selection']);
    }
}
