import { useState } from 'react';
import './App.scss';
import CounterWrapper from './components/CounterWrapper';
import Display from './components/Display/Display';
import SuperButton from './components/SuperButton/SuperButton';
import ButtonWrapper from './components/ButtonWrapper';

const App = () => {
    const maxCounterValue = 5;
    const initialCounterValue = 0;

    const [ counter, setCounter ] = useState<number>(initialCounterValue);
    const [ message ] = useState<string | null>(null);

    const increaseCounter = () => counter < maxCounterValue &&
        setCounter(counter + 1);
    const resetCounter = () => setCounter(initialCounterValue);

    return (
        <div className="App">
            <CounterWrapper>
                <Display value={ counter }
                         message={ message }
                         isMaxValue={ counter === maxCounterValue } />
                <ButtonWrapper>
                    <SuperButton name={ 'inc' }
                                 disabled={ counter === maxCounterValue }
                                 callback={ increaseCounter } />
                    <SuperButton name={ 'reset' } disabled={ counter < 1 }
                                 callback={ resetCounter } />
                </ButtonWrapper>
            </CounterWrapper>
        </div>
    );
};

export default App;
