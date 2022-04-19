import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';

import {AppComponent} from './app.component';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {QuizComponent} from './quizzes/quiz/quiz.component';
import {HeaderComponent} from './header/header.component';
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
import {AppRoutingModule} from './app.routing.module';
import {QuestionListComponent} from './questions/question-list/question-list.component';
import {QuestionFormComponent} from './questions/question-form/question-form.component';
import {QuestionComponent} from './questions/question/question.component';
import {UserComponent} from './users/user/user.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {ThemeComponent} from './themes/theme/theme.component';
import {ThemeSelectionComponent} from "./themes/theme-selection/theme-selection.component";
import {EditThemeComponent} from './themes/edit-theme/edit-theme.component';
import {PlayQuizComponent} from './quizzes/play-quiz/play-quiz.component';
import {QuestionPlayComponent} from './questions/question-play/question-play.component';
import {QuizResultComponent} from './quizzes/play-quiz/quiz-result/play-quiz-result.component';
import {ConfigurationListComponent} from "./configurations/configuration-list/configuration-list.component";
import {ConfigurationComponent} from "./configurations/configuration/configuration.component";
import {ConfigurationFormComponent} from "./configurations/configuration-form/configuration-form.component";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DisplayQuizComponent} from "./quizzes/display-quiz/display-quiz.component";
import {QuizSelectionComponent} from "./quizzes/quiz-selection/quiz-selection.component";

import {
  ConfigurationAutomatiqueComponent
} from './configurations/configuration-automatique/configuration-automatique.component';

import {
  ConfigurationManuelleComponent
} from './configurations/configuration-manuelle/configuration-manuelle.component';

import {
  ConfigurationSelectionComponent
} from './configurations/configuration-selection/configuration-selection.component';

@NgModule({
    declarations: [
        AppComponent,
        QuizListComponent,
        QuizComponent,
        HeaderComponent,
        EditQuizComponent,
        QuestionListComponent,
        QuestionFormComponent,
        QuestionComponent,
        UserComponent,
        UserFormComponent,
        UserListComponent,
        AccueilComponent,
        ConnexionComponent,
        ThemeComponent,
        ConfigurationAutomatiqueComponent,
        ConfigurationManuelleComponent,
        ConfigurationSelectionComponent,
        EditThemeComponent,
        PlayQuizComponent,
        QuestionPlayComponent,
        QuizResultComponent,
        ConfigurationListComponent,
        ConfigurationComponent,
        ConfigurationFormComponent,
        DisplayQuizComponent,
        ThemeSelectionComponent,
        QuizSelectionComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
