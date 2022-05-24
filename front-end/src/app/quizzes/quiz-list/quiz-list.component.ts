import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

    public quizList: Quiz[] = [];
    public themeId: number;
    public offset = false;

    constructor(public userService: UserService, private activateRoute: ActivatedRoute,private router: Router, public quizService: QuizService) {
        this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
            this.quizList = quizzes;
            if(this.themeId)
                this.quizList = this.quizList.filter(e => e.theme == this.themeId)
        });
        this.themeId= parseInt(this.activateRoute.snapshot.paramMap.get('theme'), 10);
    }

    ngOnInit(): void {
        this.offset = this.userService.isOffset()
        this.quizList = this.quizList.filter(e => e.theme == this.themeId)
    }

    quizSelected(quiz: Quiz): void {
        this.router.navigate(['/play-quiz/' + quiz.name ]);
    }

    editQuiz(quiz: Quiz): void {
        setTimeout(()=>{this.router.navigate(['/edit-quiz/' +quiz.id]);},100)

    }

    deleteQuiz(quiz: Quiz): void {
        this.quizService.deleteQuiz(quiz);
    }

    addQuiz(): void{
        let quiz = {
            id: this.quizService.newId(),
            name: "Default",
            questions : [],
            difficulte : 2,
            theme : parseInt(this.activateRoute.snapshot.paramMap.get('theme'), 10)
        }
        this.quizService.addQuiz(quiz);
        this.editQuiz(quiz);
    }

    retour() {
        this.router.navigate(['/theme-selection']);
    }
}
