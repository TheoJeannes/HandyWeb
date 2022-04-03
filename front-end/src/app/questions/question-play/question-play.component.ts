import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../models/question.model';


@Component({
    selector: 'questionPlayComponent',
    templateUrl: './question-play.component.html',
    styleUrls: ['./question-play.component.scss']
})
export class QuestionPlayComponent  {

    @Input() question: Question = <Question>{};

    constructor() {
    }

}
