import {
    combineReducers, legacy_createStore as createStore
} from 'redux';
import { counterReducer } from './counterReducer.ts';
import { loadState, saveState } from '../utils/localstorageUtils.ts';
import { checkCorrectCounter } from '../utils/checkCorrectCounter.ts';

const rootReducer = combineReducers({
    counter: counterReducer
});

export const store = createStore(rootReducer, loadState(),);

store.subscribe(() => {
    const state = store.getState();
    if (checkCorrectCounter(state.counter)) {
        saveState({
            counter: state.counter
        });
    }
});

export type AppRootStateType = ReturnType<typeof rootReducer>;