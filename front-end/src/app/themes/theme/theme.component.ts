import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Theme} from "../../../models/theme.model";

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

    @Input()
    theme: Theme;

    @Output()
    quizSelected: EventEmitter<Theme> = new EventEmitter<Theme>();

    @Output()
    editQuiz: EventEmitter<Theme> = new EventEmitter<Theme>();

    @Output()
    deleteQuiz: EventEmitter<Theme> = new EventEmitter<Theme>();

    constructor() {
    }

    ngOnInit(): void {
    }

    selectQuiz(): void {
        this.quizSelected.emit(this.theme);
    }

    edit(): void {
        this.editQuiz.emit(this.theme);
    }

    delete(): void {
        this.deleteQuiz.emit(this.theme);
    }

}
