import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {QuizService} from '../../services/quiz.service';
import {Quiz} from '../../models/quiz.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

    public admin = true;
    public offset = false;
    public quizList: Quiz[];

    constructor(public route : Router,public userService: UserService, public quizS : QuizService) {
        this.quizS.quizzes$.subscribe((quizzes: Quiz[]) => {
            this.quizList = quizzes;
        });
    }

    ngOnInit(): void {
        this.userService.userSelected$.subscribe(() => {
            this.admin = this.userService.isRoleAdmin()
            this.offset = this.userService.isOffset()
            console.log(this.admin)
        });
    }

    randomQuiz() {
        this.quizS.retrieveQuizzes();
        let nb= this.quizList.length;
        let id = this.quizList.map(e => e.id)[Math.floor(Math.random() * nb)];
        this.route.navigate(["/play-quiz/"+id])
    }
}
