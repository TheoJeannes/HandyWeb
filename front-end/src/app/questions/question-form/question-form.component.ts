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
        let i = this.question.answers.length,
            answer = {id: 0,isCorrect: false,value: " ",type: "Nouveau",questionId:this.question.id,quizId:this.question.quizId};
        for(i;i<4;i++){
            answer.id = i;
            this.question.answers.push(answer);
        }

    }

    editQuestion(): void {
        console.log("Question")
        console.log(this.question)
        this.questionEdited.emit(this.question);
    }
}
