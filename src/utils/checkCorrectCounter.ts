import { InitialStateType } from '../state/counterReducer.ts';

export const checkCorrectCounter = (counter: InitialStateType): boolean => {
    return (counter.min < counter.max) && (counter.min && counter.max) >= 0;
};