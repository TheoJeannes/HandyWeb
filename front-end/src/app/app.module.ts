import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {QuizComponent} from './quizzes/quiz/quiz.component';
import {HeaderComponent} from './header/header.component';
import {QuizFormComponent} from './quizzes/quiz-form/quiz-form.component';
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
import {ThemeFormComponent} from './themes/theme-form/theme-form.component';
import {ThemeListComponent} from './themes/theme-list/theme-list.component';
import {
  ConfigurationAutomatiqueComponent
} from './configurations/configuration-automatique/configuration-automatique.component';
import {
  ConfigurationManuelleComponent
} from './configurations/configuration-manuelle/configuration-manuelle.component';
import {
  ConfigurationSelectionComponent
} from './configurations/configuration-selection/configuration-selection.component';
import {EditThemeComponent} from './themes/edit-theme/edit-theme.component';
import {PlayQuizComponent} from './quizzes/play-quiz/play-quiz.component';
import {QuestionPlayComponent} from './questions/question-play/question-play.component';
import {QuizResultComponent} from './quizzes/play-quiz/quiz-result/play-quiz-result.component';
import {ReponseComponent} from './questions/question-form/reponse/reponse.component';
import {ConfigurationListComponent} from "./configurations/configuration-list/configuration-list.component";
import {ConfigurationComponent} from "./configurations/configuration/configuration.component";
import {ConfigurationFormComponent} from "./configurations/configuration-form/configuration-form.component";

@NgModule({
    declarations: [
        AppComponent,
        QuizListComponent,
        QuizComponent,
        HeaderComponent,
        QuizFormComponent,
        EditQuizComponent,
        QuestionListComponent,
        QuestionFormComponent,
        QuestionComponent,
        UserComponent,
        UserFormComponent,
        UserListComponent,
        AccueilComponent,
        ThemeFormComponent,
        ConnexionComponent,
        ThemeFormComponent,
        ThemeListComponent,
        ThemeComponent,
        ConfigurationAutomatiqueComponent,
        ConfigurationManuelleComponent,
        ConfigurationSelectionComponent,
        EditThemeComponent,
        PlayQuizComponent,
        ReponseComponent,
        QuestionPlayComponent,
        QuizResultComponent,
        ConfigurationListComponent,
        ConfigurationComponent,
        ConfigurationFormComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
