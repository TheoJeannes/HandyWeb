import {Answer} from './answer.model';

export interface Question {
    //TODO Arreter d'etre debile
    id: number;
    label: string;
    answers: Answer[];
    image?: string;
    quizId: number;
}
