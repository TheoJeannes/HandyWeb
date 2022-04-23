import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-question-play',
    templateUrl: './question-play.component.html',
    styleUrls: ['./question-play.component.scss']
})
export class QuestionPlayComponent implements OnInit, OnChanges {

    public selectedAnswer?: Answer;
    public correction: boolean;

    @Input() question?: Question;

    @Output()
    isCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();

    public offset = false;

    constructor(private userService : UserService) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.correction=false;
    }

    ngOnInit(): void {
        this.offset = this.userService.isOffset()
    }

    selected(answer): void{
        this.selectedAnswer = answer;
    }

    verify() {
        if(this.selectedAnswer){
            this.correction = true;
            this.isCorrect.emit(this.selectedAnswer.isCorrect)
            this.selectedAnswer = null
        }
    }
}
