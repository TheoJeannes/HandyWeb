import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';

@Component({
    selector: 'app-play-quiz-result',
    templateUrl: './play-quiz-result.component.html',
    styleUrls: ['./play-quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {



    @Input()
    correctAnswers: number;
    @Input()
    totalAnswers: number;

    constructor(private router: Router) {

    }

    ngOnInit(): void {

    }

    finish(){
        this.router.navigate(['/accueil']);
    }

}
