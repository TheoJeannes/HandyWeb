import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {Answer} from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /*
   Services Documentation:
   https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /*
   The list of quiz.
   The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = [];

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]>
    = new BehaviorSubject(this.quizzes);

  public quizSelected$: Subject<Quiz> = new Subject();

  private quizUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';
  private answersPath = 'answers';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveQuizzes();
  }

  retrieveQuizzes(): void {
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });
  }

  addQuiz(quiz: Quiz): void {
    this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  setSelectedQuiz(quizId: number): void {
    const urlWithId = this.quizUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizSelected$.next(quiz);
    });
  }

  editQuiz(quiz: Quiz){
    const urlWithId = this.quizUrl + '/' + quiz.id;
    console.log(urlWithId)
    console.log(quiz)
    this.http.put<Quiz>(urlWithId,quiz,this.httpOptions).subscribe(()=> this.retrieveQuizzes());
  }

  deleteQuiz(quiz: Quiz): void {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  addQuestion(quiz: Quiz, question: Question): void {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath;
    this.http.post<Question>(questionUrl, question, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }

  editQuestion(question: Question): void {
    const urlWithId = this.quizUrl + "/" + question.quizId + "/" + this.questionsPath + "/" + question.id
    console.log(question)
    this.http.put<Quiz>(urlWithId,question,this.httpOptions).subscribe(()=> this.setSelectedQuiz(question.quizId));
  }

  deleteQuestion(quiz: Quiz, question: Question): void {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    let answerUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    for(let answer of question.answers){
       answerUrl = questionUrl+ '/' + this.answersPath + '/'+ answer.id;
       this.http.delete<Answer>(answerUrl, this.httpOptions).subscribe( () => this.setSelectedQuiz(quiz.id));
    }
    this.http.delete<Question>(questionUrl, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }
}
