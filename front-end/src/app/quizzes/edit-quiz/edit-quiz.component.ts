import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';
import {Question} from '../../../models/question.model';

@Component({
    selector: 'app-edit-quiz',
    templateUrl: './edit-quiz.component.html',
    styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

    public quiz: Quiz;
    public index : number = 0;

    constructor(private route: ActivatedRoute, private quizService: QuizService) {
        this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.quizService.setSelectedQuiz(id);
        console.log(this);
    }

    addQuestion(question: Question){
            this.quizService.addQuestion(this.quiz, question);
    }

    updateQuestions($event: Question) {
        this.quizService.editQuestion(this.quiz,this.quiz.questions[this.index],$event);
    }

    selectQuestion($event: number) {
        this.index=$event;
    }
}
