import { useState } from 'react';
import './App.scss';
import Display from './components/Display/Display';
import SuperButton from './components/SuperButton/SuperButton';

const App = () => {
    const maxCounterValue = 5;
    const initialCounterValue = 0;

    const [ counter, setCounter ] = useState<number>(initialCounterValue);

    const increaseCounter = () => counter < maxCounterValue &&
        setCounter(counter + 1);
    const resetCounter = () => setCounter(initialCounterValue);

    return (
        <div className="App">
            <Display value={ counter }
                     isMaxValue={ counter === maxCounterValue } />
            <SuperButton name={ 'inc' } disabled={ counter === maxCounterValue }
                         callback={ increaseCounter } />
            <SuperButton name={ 'reset' } disabled={ counter < 1 }
                         callback={ resetCounter } />
        </div>
    );
};

export default App;
