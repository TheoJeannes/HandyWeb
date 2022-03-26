import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../models/question.model';

@Component({
    selector: 'app-question-play',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionPlayComponent implements OnInit {

    @Input()
    question: Question;

    @Output()
    deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

    constructor() {
    }

    ngOnInit(): void {
    }

    delete(): void {
        this.deleteQuestion.emit(this.question);
    }

}
