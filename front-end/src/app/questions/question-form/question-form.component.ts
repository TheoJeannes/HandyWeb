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

    ngOnInit(): void {
        if(this.question){
            let i = 0,
                answer = {id: 0,isCorrect: false,value: " ",type: "Nouveau",questionId:this.question.id,quizId:this.question.quizId};
            if(this.question.answers)
                i=this.question.answers.length;
            for(i;i<4;i++){
                answer.id = i;
                this.question.answers.push(answer);
            }
        }
    }

    editQuestion(): void {
        this.questionEdited.emit(this.question);
    }

    isCorrect(id) {
        for(let answer of this.question.answers){
            answer.isCorrect = (answer.id===id);
        }
        console.log(this.question)
    }
}
