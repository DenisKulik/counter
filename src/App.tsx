import { useState } from 'react';
import './App.scss';
import CounterWrapper from './components/CounterWrapper';
import CounterInfo from './components/Display/CounterInfo';
import SuperButton from './components/Buttons/SuperButton/SuperButton';
import ButtonWrapper from './components/Buttons';
import Buttons from './components/Buttons';
import CounterSettings from './components/Display/CounterSettings';
import Display from './components/Display';

export type CounterStateType = { min: number, current: number, max: number }
const counterState: CounterStateType = { min: 0, current: 0, max: 5 };

const App = () => {
    const [ counter, setCounter ] = useState<CounterStateType>(counterState);
    const [ settingsMode, setSettingsMode ] = useState<boolean>(false);
    const [ error, setError ] = useState<boolean>(false);

    const checkCorrectNumber = () => {
        if ((counter.min >= counter.max) || (counter.min || counter.max) < 0) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const changeSettingsMod = () => setSettingsMode(true);
    const increaseCounter = () => {
        counter.current < counter.max &&
        setCounter({ ...counter, current: counter.current + 1 });
    };
    const resetCounter = () => setCounter({ ...counter, current: counter.min });
    const setCounterHandler = () => {
        if (error) return;

        setSettingsMode(false);
    };

    return (
        <div className="App">
            <CounterWrapper>
                {
                    settingsMode ? (
                        <>
                            <Display>
                                <CounterSettings
                                    counter={ counter }
                                    setCounter={ setCounter }
                                    checkCorrectNumber={ checkCorrectNumber } />
                            </Display>
                            <ButtonWrapper>
                                <SuperButton
                                    name={ 'set' }
                                    disabled={ error }
                                    callback={ setCounterHandler } />
                            </ButtonWrapper>
                        </>
                    ) : (
                        <>
                            <Display>
                                <CounterInfo
                                    title={ counter.current }
                                    isMaxValue={ counter.current ===
                                        counter.max } />
                            </Display>

                            <Buttons>
                                <SuperButton
                                    name={ 'inc' }
                                    disabled={ counter.current === counter.max }
                                    callback={ increaseCounter } />
                                <SuperButton
                                    name={ 'reset' }
                                    disabled={ counter.current === counter.min }
                                    callback={ resetCounter } />
                                <SuperButton
                                    name={ 'settings' }
                                    callback={ changeSettingsMod } />
                            </Buttons>
                        </>
                    )
                }
            </CounterWrapper>
        </div>
    );
};

export default App;
