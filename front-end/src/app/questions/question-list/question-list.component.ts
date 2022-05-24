import {Component, OnInit} from '@angular/core';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';
import {Question} from 'src/models/question.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss']
})

export class QuestionListComponent implements OnInit {

    public quiz: Quiz;

    constructor(private route : Router, private router : ActivatedRoute, private quizService: QuizService) {
        this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
    }

    ngOnInit(): void {
        const id = parseInt(this.router.snapshot.paramMap.get('id'));
        this.quizService.setSelectedQuiz(id);
    }


    addQuestion(): void {
        let question = this.createQuestion();
        console.log("Adding")
        this.quizService.addQuestion(this.quiz, question);
        console.log("Indexing")
        this.indexQuestion(question);
        console.log("Done")
    }

    createQuestion(): Question{
        const id = this.newId(this.quiz);
        let answer1 = {
            id : 1,
            value: "A definir",
            isCorrect: true,
            questionId : id,
            quizId: this.quiz.id
        }
        let answer2 = {
            id : 2,
            value: "A definir",
            isCorrect: false,
            questionId : id,
            quizId: this.quiz.id
        }
        let answer3 = {
            id : 3,
            value: "A definir",
            isCorrect: false,
            questionId : id,
            quizId: this.quiz.id
        }
        let answer4 = {
            id : 4,
            value: "A definir",
            isCorrect: false,
            questionId : id,
            quizId: this.quiz.id
        }
        return {
            id: id,
            label: "Nouveau",
            answers: [answer1, answer2, answer3, answer4],
            quizId : this.quiz.id
        };
    }

    indexQuestion(question): void {
        this.route.navigate(['/edit-question/'+this.quiz.id+'/'+question.id]);
    }

    deleteQuestion(question: Question): void {
        this.quizService.deleteQuestion(this.quiz, question);
    }

    newId(quiz : Quiz):number{
        if(quiz.questions.length === 0)
            return 0;
       return Math.max(...quiz.questions.map(x => x.id)) +1 ;
    }

    retour() {
        this.route.navigate(['/edit-quiz/'+this.quiz.id]);
    }
}
