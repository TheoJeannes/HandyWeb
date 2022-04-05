import {Answer} from './answer.model';

export interface Question {
    //TODO Arreter d'etre debile
    id: string;
    label: string;
    answers: Answer[];
    image?: string;
}
