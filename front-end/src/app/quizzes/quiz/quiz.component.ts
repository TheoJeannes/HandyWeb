import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {UserService} from '../../../services/user.service';

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

    constructor(public userService: UserService) {
    }

    ngOnInit(): void {
        console.log(this.quiz)
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
