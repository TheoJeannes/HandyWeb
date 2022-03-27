import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';

@Component({
    selector: 'app-question-play',
    templateUrl: './question-play.component.html',
    styleUrls: ['./question-play.component.scss']
})
export class QuestionPlayComponent implements OnInit, OnChanges {

    private selectedAnswer?: Answer;
    private correction: boolean;

    @Input() question?: Question;

    @Output()
    isCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.correction=false;
    }

    ngOnInit(): void {
    }

    selected(answer): void{
        this.selectedAnswer = answer;
    }

    verify() {
        this.correction = true;
        this.isCorrect.emit(this.selectedAnswer.isCorrect)
    }
}
