import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';
import {Question} from 'src/models/question.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss']
})

export class QuestionListComponent implements OnInit {

    public questionList: FormGroup;

    @Input()
    quiz: Quiz;

    @Output()
    index: EventEmitter<number> = new EventEmitter<number>();

    constructor(public formBuilder: FormBuilder, private quizService: QuizService) {
        this.initializeQuestionForm();
    }

    ngOnInit(): void {

    }

    private initializeQuestionForm(): void {
        this.questionList = this.formBuilder.group({
            label: ['Nouveau', Validators.required],
            answers: this.formBuilder.array([])
        });
    }

    get answers(): FormArray {
        return this.questionList.get('answers') as FormArray;
    }

    private createAnswer(): FormGroup {
        return this.formBuilder.group({
            value: '',
            isCorrect: false,
        });
    }

    addAnswer(): void {
        let i = 0;
        for (i; i < 4; i++)
            this.answers.push(this.createAnswer());
    }

    addQuestion(): void {
        if (this.questionList.valid) {
            this.addAnswer();
            const question = this.questionList.getRawValue() as Question;
            this.quizService.addQuestion(this.quiz, question);
            this.initializeQuestionForm();
            this.index.emit(this.quiz.questions.length - 1);
        }
    }

    indexQuestion(question): void {
        this.index.emit(question.id);
    }

    deleteQuestion(question: Question): void {
        this.quizService.deleteQuestion(this.quiz, question);
    }

}
