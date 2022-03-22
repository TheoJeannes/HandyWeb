import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {
    ConfigurationSelectionComponent
} from './accueil/configuration/configuration-selection/configuration-selection.component';
import {
    ConfigurationAutomatiqueComponent
} from './accueil/configuration/configuration-automatique/configuration-automatique.component';
import {
    ConfigurationManuelleComponent
} from './accueil/configuration/configuration-manuelle/configuration-manuelle.component';
import {ThemeListComponent} from './themes/theme-list/theme-list.component';
import {PlayQuizComponent} from './quizzes/play-quiz/play-quiz.component';

const routes: Routes = [
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'play-quiz/:id', component: PlayQuizComponent},
    {path: '', redirectTo: '/quiz-list', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
