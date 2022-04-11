import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { THEME_LIST } from '../mocks/quiz-list.mock';
import { Question } from '../models/question.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {Theme} from "../models/theme.model";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themes: Theme[] = THEME_LIST;

    /*
     Observable which contains the list of themes.
     Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
     */
    public themes$: BehaviorSubject<Theme[]>
        = new BehaviorSubject(this.themes);

    public themeSelected$: Subject<Theme> = new Subject();

    private themeUrl = serverUrl + '/themes';

    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient) {
        this.retrieveTheme();
    }

    retrieveTheme(): void {
        this.http.get<Theme[]>(this.themeUrl).subscribe((themeList) => {
            this.themes = themeList;
            this.themes$.next(this.themes);
        });
    }

    addTheme(quiz: Quiz): void {
        this.http.post<Theme>(this.themeUrl, this.httpOptions).subscribe(() => this.retrieveTheme());
    }

    deleteTheme(theme: Theme): void {
        const urlWithId = this.themeUrl + '/' + theme.id;
        this.http.delete<Theme>(urlWithId, this.httpOptions).subscribe(() => this.retrieveTheme());
    }

    editTheme(quiz: Quiz, question: Question,newQuestion : Question): void {

    }
}
