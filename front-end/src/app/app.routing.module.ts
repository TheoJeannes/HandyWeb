import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {ConfigurationSelectionComponent} from './configurations/configuration-selection/configuration-selection.component';
import {ConfigurationAutomatiqueComponent} from './configurations/configuration-automatique/configuration-automatique.component';
import {ConfigurationManuelleComponent} from './configurations/configuration-manuelle/configuration-manuelle.component';
import {PlayQuizComponent} from './quizzes/play-quiz/play-quiz.component';
import {QuestionPlayComponent} from "./questions/question-play/question-play.component";
import {AuthGuardService as AuthGuard} from "../services/AuthGuardService";
import {UserService} from "../services/user.service";
import {ThemeComponent} from "./themes/theme/theme.component";
import {EditThemeComponent} from "./themes/edit-theme/edit-theme.component";
import {ThemeSelectionComponent} from "./themes/theme-selection/theme-selection.component";

const routes: Routes = [
    {path: 'user-list', component: UserListComponent, canActivate: [AuthGuard]},
    {path: 'quiz-list/:themeName', component: QuizListComponent, canActivate: [AuthGuard]},
    {path: 'edit-quiz/:id', component: EditQuizComponent, canActivate: [AuthGuard]},
    {path: 'play-quiz/:idQuiz', component: PlayQuizComponent, canActivate: [AuthGuard]},
    {path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard]},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'config', component: ConfigurationSelectionComponent, canActivate: [AuthGuard]},
    {path: 'config/auto', component: ConfigurationAutomatiqueComponent, canActivate: [AuthGuard]},
    {path: 'config/manuel', component: ConfigurationManuelleComponent, canActivate: [AuthGuard]},
    {path: 'question-play', component: QuestionPlayComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'theme', component: ThemeComponent},
    {path: 'edit-theme/:themeId', component: EditThemeComponent},
    {path: 'theme-selection', component: ThemeSelectionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers : [AuthGuard, UserService],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
