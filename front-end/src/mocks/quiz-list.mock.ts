import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import {Theme} from "../models/theme.model";

export const QUESTION_ACTOR: Question = {
    id: 1,
    quizId : 1,
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            id: 1,
            questionId : 1,
            quizId : 1,
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            id: 2,
            questionId : 1,
            quizId : 1,
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: 1,
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR[0]],
    },
    {
        id: 2,
        name: 'Les technos WEB',
        theme: 'Technos',
        questions: [],
    }
];

// @ts-ignore
export const THEME_LIST: Theme[] = [
    {
        id: '1',
        name: 'Actor', // What's happening if I change this value..?
    },
    {
        id: '2',
        name: 'Technos',
    }
];
