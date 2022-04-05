import {Quiz} from './quiz.model';

export interface Theme {
    id: string;
    name: string;
    quizz?: Quiz[];
    image?:string;
}
