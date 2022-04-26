import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {serverUrl, httpOptionsBase} from '../configs/server.config';
import {Theme} from '../models/theme.model';
import {QuizService} from './quiz.service';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themes: Theme[] = [];

    /*
     Observable which contains the list of themes.
     Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
     */
    public themes$: BehaviorSubject<Theme[]>
        = new BehaviorSubject(this.themes);

    public themeSelected$: Subject<Theme> = new Subject();

    private themeUrl = serverUrl + '/themes';

    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient,public quizService: QuizService) {
        this.retrieveTheme();
    }

    retrieveTheme(): void {
        this.http.get<Theme[]>(this.themeUrl).subscribe((themeList) => {
            this.themes = themeList;
            this.themes$.next(this.themes);
        });
    }

    setSelectedTheme(themeId: number): void {
        const urlWithId = this.themeUrl + '/' + themeId;
        this.http.get<Theme>(urlWithId).subscribe((quiz) => {
            this.themeSelected$.next(quiz);
        });
    }

    addTheme(theme: Theme): void {
        this.http.post<Theme>(this.themeUrl, theme, this.httpOptions).subscribe(() => this.retrieveTheme());
    }

    deleteTheme(theme: Theme): void {
        const urlWithId = this.themeUrl + '/' + theme.id;

        this.deleteQuestions(theme)

        this.http.delete<Theme>(urlWithId, this.httpOptions).subscribe(() => this.retrieveTheme());
    }

    deleteQuestions(theme : Theme){
        let quizList;
        this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
            quizList = quizzes;
        });
        for(let quiz of quizList) {
            if (quiz.theme == theme.id)
                this.quizService.deleteQuiz(quiz);
        }
    }

    editTheme(theme: Theme): void {
        const urlWithId = this.themeUrl + '/' + theme.id;
        this.http.put<Quiz>(urlWithId, theme, this.httpOptions).subscribe(() => this.retrieveTheme());
    }
}
