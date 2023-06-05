import { CounterType } from '../App.tsx';

const initialState: CounterType = {
    min: 0,
    current: 0,
    max: 5
};

export const counterReducer = (
    state: CounterType = initialState,
    action: ActionsTypes) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                current: state.current + 1
            };
        case 'RESET':
            return {
                ...state,
                current: state.min
            };
        case 'CHANGE-MAX-VALUE':
            return {
                ...state,
                current: state.min,
                max: action.payload.num
            };
        case 'CHANGE-MIN-VALUE':
            return {
                ...state,
                current: action.payload.num,
                min: action.payload.num
            };
        default:
            return state;
    }
};

type ActionsTypes = increaseCounterACType | resetCounterACType
    | changeMaxValueACType | changeMinValueACType;
type increaseCounterACType = ReturnType<typeof increaseCounterAC>;
type resetCounterACType = ReturnType<typeof resetCounterAC>;
type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>;
type changeMinValueACType = ReturnType<typeof changeMinValueAC>;

export const increaseCounterAC = () => {
    return {
        type: 'INCREASE'
    } as const;
};

export const resetCounterAC = () => {
    return {
        type: 'RESET'
    } as const;
};

export const changeMaxValueAC = (num: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: { num }
    } as const;
};

export const changeMinValueAC = (num: number) => {
    return {
        type: 'CHANGE-MIN-VALUE',
        payload: { num }
    } as const;
};