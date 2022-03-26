import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';

@Component({
    selector: 'app-question-play',
    templateUrl: './question-play.component.html',
    styleUrls: ['./question-play.component.scss']
})
export class QuestionPlayComponent implements OnInit {

    private selectedAnswer? : Answer;
    private correction : boolean = false;

    @Input() question?: Question

    constructor() {
    }

    ngOnInit(): void {
        console.log(this);
    }

    selected(answer): void{
        this.selectedAnswer = answer;
        console.log(this.selectedAnswer);
    }

    verify() {
        this.correction = true;
        console.log(this.correction);
    }
}
