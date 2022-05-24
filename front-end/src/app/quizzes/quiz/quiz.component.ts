import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {UserService} from '../../../services/user.service';
import {GraphicalAdaptationService} from '../../../services/graphical-adaptation.service';
import {Config} from '../../../models/config/config.model';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    @Input()
    quiz: Quiz;

    @Output()
    quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    @Output()
    editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    @Output()
    deleteQuiz = new EventEmitter<Quiz>();

    difficulte : String;

    public admin = false;

    private config: Config;
    constructor(public userService: UserService, private graphicalService: GraphicalAdaptationService) {
        this.userService.configSelected$.subscribe(config => this.config = config);
    }

    ngOnInit(): void {
        console.log(this.quiz)
        this.graphicalService.changeImageSize("image-quiz", this.config);
        this.admin = this.userService.isRoleAdmin();
        switch (this.quiz.difficulte+""){
            case "1":
                this.difficulte = "Facile";
                break;
            case "3":
                this.difficulte = "Difficile";
                break;
            default:
                this.difficulte = "Moyenne";
        }

    }

    edit(): void {
        this.editQuiz.emit(this.quiz);
    }

    delete(): void {
        this.deleteQuiz.emit(this.quiz);
    }
}
