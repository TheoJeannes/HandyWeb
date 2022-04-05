import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';
import {Question} from 'src/models/question.model';


@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss']
})

export class QuestionListComponent implements OnInit {

    @Input()
    quiz: Quiz;

    @Output()
    index: EventEmitter<number> = new EventEmitter<number>();

    constructor( private quizService: QuizService) {

    }

    ngOnInit(): void {

    }


    addQuestion(): void {
        let question = this.createQuestion();
        this.quizService.addQuestion(this.quiz, question);
        this.indexQuestion(question);

    }

    createQuestion(): Question{
        let answer1 = {
            value: "A definir",
            isCorrect: true
        }
        let answer2 = {
            value: "A definir",
            isCorrect: false
        }
        let answer3 = {
            value: "A definir",
            isCorrect: false
        }
        let answer4 = {
            value: "A definir",
            isCorrect: false
        }
        return {
            id: this.quiz.questions.length + "",
            label: "Nouveau",
            answers: [answer1, answer2, answer3, answer4]
        };
    }

    indexQuestion(question): void {
        this.index.emit(question.id);
    }

    deleteQuestion(question: Question): void {
        this.quizService.deleteQuestion(this.quiz, question);
    }

}
