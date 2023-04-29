import { useState } from 'react';
import './App.scss';
import CounterWrapper from './components/CounterWrapper';
import Display from './components/Display/Display';
import SuperButton from './components/SuperButton/SuperButton';
import ButtonWrapper from './components/ButtonWrapper';
import CounterSettings from './components/CounterSettings';

export type CounterStateType = {
    startValue: number
    maxValue: number
}

export type TypeValue = 'start' | 'max'

const App = () => {
    const counterState: CounterStateType = { startValue: 0, maxValue: 5, };

    const [ startValue, setStartValue ] = useState<number>(
        counterState.startValue);
    const [ maxValue, setMaxValue ] = useState<number>(counterState.maxValue);
    const [ counter, setCounter ] = useState<number>(counterState.startValue);
    const [ message, setMessage ] = useState<string | null>(null);

    const isCorrectNumber = (num: number, type: TypeValue) => {
        if (type === 'max') return num > startValue && (num && startValue) >= 0;
        if (type === 'start') return maxValue > num && (maxValue && num) >= 0;
    };

    const increaseCounter = () => {
        counterState.startValue < counterState.maxValue &&
        setCounter(counter + 1);
    };
    const resetCounter = () => setCounter(counterState.startValue);
    const setCounterHandler = () => {
        if (message) setMessage(null);

        counterState.startValue = startValue;
        counterState.maxValue = maxValue;
        setCounter(startValue);
    };

    return (
        <div className="App">
            <CounterWrapper>
                <CounterSettings
                    startValue={ startValue }
                    maxValue={ maxValue }
                    setStartValue={ setStartValue }
                    setMaxValue={ setMaxValue }
                    setMessage={ setMessage }
                    isCorrectNumber={ isCorrectNumber }
                />
                <ButtonWrapper>
                    <SuperButton
                        name={ 'set' }
                        disabled={ message === 'incorrect value' }
                        callback={ setCounterHandler } />
                </ButtonWrapper>
            </CounterWrapper>

            <CounterWrapper>
                <Display
                    title={ message ? message : counter }
                    isMaxValue={ counter === maxValue } />
                <ButtonWrapper>
                    <SuperButton
                        name={ 'inc' }
                        disabled={ counter === maxValue }
                        callback={ increaseCounter } />
                    <SuperButton
                        name={ 'reset' }
                        disabled={ counter === startValue }
                        callback={ resetCounter } />
                </ButtonWrapper>
            </CounterWrapper>;
        </div>
    );
};

export default App;
