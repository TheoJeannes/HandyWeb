import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../../../../models/quiz.model';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit {

  @Input()
  quiz : Quiz;

  constructor() { }

  ngOnInit(): void {
  }

}
