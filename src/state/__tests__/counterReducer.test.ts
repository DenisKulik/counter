import {
    counterReducer,
    increaseCounterAC,
    resetCounterAC,
    changeMaxValueAC,
    changeMinValueAC, InitialStateType,
} from '../counterReducer';

describe('Counter Reducer', () => {
    let initialState: InitialStateType;

    beforeEach(() => {
        initialState = {
            min: 0,
            current: 3,
            max: 5
        };
    });

    it('should increase current value correctly', () => {
        const action = increaseCounterAC();

        const newState = counterReducer(initialState, action);

        expect(newState.current).toBe(4);
    });

    it('should reset counter correctly', () => {
        const action = resetCounterAC();

        const newState = counterReducer(initialState, action);

        expect(newState.current).toBe(0);
    });

    it('should change max value correctly', () => {
        const newMaxValue = 10;
        const action = changeMaxValueAC(newMaxValue);

        const newState = counterReducer(initialState, action);

        expect(newState.current).toBe(initialState.min);
        expect(newState.max).toBe(newMaxValue);
    });

    it('should change min value correctly', () => {
        const newMinValue = 2;
        const action = changeMinValueAC(newMinValue);

        const newState = counterReducer(initialState, action);

        expect(newState.current).toBe(newMinValue);
        expect(newState.min).toBe(newMinValue);
    });
});