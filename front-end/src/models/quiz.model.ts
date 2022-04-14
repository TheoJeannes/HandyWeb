import { Question } from './question.model';

export interface Quiz {
    id: number;
    name: string;
    theme?: number;
    questions: Question[];
    image?: string;
    difficulte?: number;
}
