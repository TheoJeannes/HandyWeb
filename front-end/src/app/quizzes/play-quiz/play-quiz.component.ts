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

    constructor(private route: ActivatedRoute, private quizService: QuizService) {
        this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
    }

    ngOnInit(): void {
        const idQuiz = this.route.snapshot.paramMap.get('idQuiz');
        this.quizService.setSelectedQuiz(idQuiz);
        console.log(this);
    }

    next(){
        if(this.quiz.questions.length-1>this.question)
            this.question++;
    }

}
