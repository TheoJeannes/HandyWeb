import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from 'src/models/quiz.model';
import {Question} from 'src/models/question.model';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit, OnChanges {

    @Input()
    question: Question ;

    @Output()
    questionEdited : EventEmitter<Question> = new EventEmitter<Question>();

    public answerForm: FormGroup;

    constructor(public formBuilder: FormBuilder, private quizService: QuizService) {
        // Form creation
        this.initializeForm();
        console.log(this);
    }

    ngOnChanges(changes: SimpleChanges): void {

    }

    private initializeForm(): void {
        this.answerForm = this.formBuilder.group({
            label: ['', Validators.required],
            answers: this.formBuilder.array([])
        });
    }

    ngOnInit(): void {
        for(let i=0;i<4;i++)
            this.addAnswer();
    }

    get answers(): FormArray {
        return this.answerForm.get('answers') as FormArray;
    }

    private createAnswer(): FormGroup {
        return this.formBuilder.group({
            value: '',
            isCorrect: false,
        });
    }

    addAnswer(): void {
        this.answers.push(this.createAnswer());
    }

    editQuestion(): void {
        if (this.answerForm.valid) {
            const question = this.answerForm.getRawValue() as Question;
            this.questionEdited.emit(question);
            this.initializeForm();
        }
    }

    changePicture() {
        //TODO Submit un lien pour l'image a valider
    }
}
