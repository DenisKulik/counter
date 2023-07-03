const initialState = {
    min: 0,
    current: 0,
    max: 5
};

export const counterReducer = (
    state: InitialStateType = initialState,
    action: ActionsType
) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, current: state.current + 1 };
        case 'RESET':
            return { ...state, current: state.min };
        case 'CHANGE-MAX-VALUE':
            return { ...state, current: state.min, max: action.payload.num };
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

export const increaseCounterAC = () => ({ type: 'INCREASE' } as const);
export const resetCounterAC = () => ({ type: 'RESET' } as const);
export const changeMaxValueAC = (num: number) =>
    ({ type: 'CHANGE-MAX-VALUE', payload: { num } } as const);
export const changeMinValueAC = (num: number) =>
    ({ type: 'CHANGE-MIN-VALUE', payload: { num } } as const);

// types
export type InitialStateType = typeof initialState;

type ActionsType =
    | ReturnType<typeof increaseCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof changeMinValueAC>;