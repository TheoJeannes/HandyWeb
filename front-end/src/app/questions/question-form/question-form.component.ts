import {Component,OnInit} from '@angular/core';
import {Question} from 'src/models/question.model';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from '../../../models/quiz.model';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

    public question : Question;
    public quiz: Quiz;

    constructor(private router: Router,private route: ActivatedRoute, private quizService: QuizService) {
        this.quizService.quizSelected$.subscribe((quiz) => {
            this.quiz = quiz
            const id = parseInt(this.route.snapshot.paramMap.get('id'));
            this.question = this.quiz.questions.filter(e => e.id === id)[0];
        });

    }

    ngOnInit(): void {
        const idQ = parseInt(this.route.snapshot.paramMap.get('idQ'));
        this.quizService.setSelectedQuiz(idQ);
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
        this.quizService.editQuestion(this.question);
        this.router.navigate(['/edit-quiz/'+this.quiz.id+'/list-questions']);
    }

    isCorrect(id) {
        for(let answer of this.question.answers){
            answer.isCorrect = (answer.id===id);
        }
        console.log(this.question)
    }

    retour() {
        this.router.navigate(['/edit-quiz/'+this.quiz.id+'/list-questions']);
    }
}
