import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Theme} from "../../../models/theme.model";
import {UserService} from '../../../services/user.service';
import {Config} from '../../../models/config/config.model';
import {GraphicalAdaptationService} from '../../../services/graphical-adaptation.service';

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

    private config: Config;
    constructor(public userService: UserService, public graphicalService: GraphicalAdaptationService) {
        this.userService.configSelected$.subscribe(config => this.config = config);
    }

    ngOnInit(): void {
        this.graphicalService.changeImageSize("image-theme", this.config);
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
