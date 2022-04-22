import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Theme} from "../../../models/theme.model";
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

    @Input()
    theme: Theme;

    @Output()
   themeSelected: EventEmitter<Theme> = new EventEmitter<Theme>();

    @Output()
    editTheme: EventEmitter<Theme> = new EventEmitter<Theme>();

    @Output()
    deleteTheme: EventEmitter<Theme> = new EventEmitter<Theme>();

    constructor(public userService: UserService) {
    }

    ngOnInit(): void {
    }

    selectTheme(): void {
        this.themeSelected.emit(this.theme);
    }

    edit(): void {
        this.editTheme.emit(this.theme);
    }

    delete(): void {
        this.deleteTheme.emit(this.theme);
    }

}
