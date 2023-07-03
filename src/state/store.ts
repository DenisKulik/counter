import {
    combineReducers, legacy_createStore as createStore
} from 'redux';
import { counterReducer } from './counterReducer.ts';
import { loadState, saveState } from '../utils/localstorageUtils.ts';

const rootReducer = combineReducers({
    counter: counterReducer
});

export const store = createStore(rootReducer, loadState(),);

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type AppRootStateType = ReturnType<typeof rootReducer>;