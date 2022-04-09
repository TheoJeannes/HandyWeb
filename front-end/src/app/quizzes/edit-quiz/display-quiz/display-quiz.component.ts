import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../../../../models/quiz.model';
import {QuizService} from '../../../../services/quiz.service';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit {

  @Input()
  quiz : Quiz;

  constructor(private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);

  }

  ngOnInit(): void {
    console.log(this);
  }

  validate(){
      this.quizService.editQuiz(this.quiz);
  }

}
