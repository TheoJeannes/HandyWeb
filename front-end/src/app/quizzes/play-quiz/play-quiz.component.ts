import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';

@Component({
    selector: 'app-play-quiz',
    templateUrl: './play-quiz.component.html',
    styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {

    public quiz?: Quiz;
    public question: number = 0;
    correctAnswers :number=0;
    public finish: boolean = false;
    nextQuestion : boolean=false;

    constructor(private route: ActivatedRoute, private quizService: QuizService) {
        this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
    }

    ngOnInit(): void {
        const idQuiz = parseInt(this.route.snapshot.paramMap.get('idQuiz'));
        this.quizService.setSelectedQuiz(idQuiz);
    }

    next(){
        this.nextQuestion =false;
        const length = this.quiz.questions.length-1;
        if(length>=this.question)
            this.question++;
        if(this.question === length+1)
            this.finish=true;
    }


    correction($event: boolean) {
        if ($event)
            this.correctAnswers++;
        this.nextQuestion = true;
    }
}
