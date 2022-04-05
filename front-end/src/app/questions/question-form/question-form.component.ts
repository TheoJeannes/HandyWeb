import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from 'src/models/question.model';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

    @Input()
    question: Question ;

    @Output()
    questionEdited : EventEmitter<Question> = new EventEmitter<Question>();

    constructor() {
        // Form creation
        console.log(this);
    }

    ngOnInit(): void {
        let i = 4 - this.question.answers.length,
            answer = {isCorrect: false,value: " ",type: "Nouveau",};
        for(i;i<4;i++)
            this.question.answers.push(answer);
    }

    editQuestion(): void {
        this.questionEdited.emit(this.question);
    }

    changePicture() {
        //TODO Submit un lien pour l'image a valider
    }
}
