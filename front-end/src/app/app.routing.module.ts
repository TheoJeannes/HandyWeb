import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {ConfigurationManuelleComponent} from './configurations/configuration-manuelle/configuration-manuelle.component';
import {PlayQuizComponent} from './quizzes/play-quiz/play-quiz.component';
import {QuestionPlayComponent} from "./questions/question-play/question-play.component";
import {AuthGuardService as AuthGuard} from "../services/AuthGuardService";
import {UserService} from "../services/user.service";
import {ThemeComponent} from "./themes/theme/theme.component";
import {EditThemeComponent} from "./themes/edit-theme/edit-theme.component";
import {ThemeSelectionComponent} from "./themes/theme-selection/theme-selection.component";
import {AdminGuardService as AdminGuard} from '../services/AdminGuardService';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {ConfigurationListComponent} from './configurations/configuration-list/configuration-list.component';
import {ConfigurationFormComponent} from './configurations/configuration-form/configuration-form.component';
import {QuestionListComponent} from './questions/question-list/question-list.component';
import {QuestionFormComponent} from './questions/question-form/question-form.component';

const routes: Routes = [
    {path: 'user-list', component: UserListComponent, canActivate: [AuthGuard]},
    {path: 'quiz-list/:theme', component: QuizListComponent, canActivate: [AuthGuard]},
    {path: 'edit-quiz/:id', component: EditQuizComponent, canActivate: [AuthGuard]},
    {path: 'edit-quiz/:id/list-questions', component: QuestionListComponent, canActivate: [AuthGuard]},
    {path: 'play-quiz/:idQuiz', component: PlayQuizComponent, canActivate: [AuthGuard]},
    {path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard]},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'config/list', component: ConfigurationListComponent, canActivate: [AuthGuard]},
    {path: 'config/form', component: ConfigurationFormComponent, canActivate: [AuthGuard]},
    {path: 'config/manuel', component: ConfigurationManuelleComponent, canActivate: [AuthGuard]},
    {path: 'question-play', component: QuestionPlayComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'theme', component: ThemeComponent, canActivate: [AuthGuard]},
    {path: 'edit-theme/:id', component: EditThemeComponent, canActivate: [AuthGuard]},
    {path: 'theme-selection', component: ThemeSelectionComponent, canActivate: [AuthGuard]},
    {path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard]},
    {path: 'edit-question/:idQ/:id', component: QuestionFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers : [AuthGuard, AdminGuard,UserService],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
