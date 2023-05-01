import { useEffect, useState } from 'react';
import './App.scss';
import CounterWrapper from './components/CounterWrapper';
import CounterInfo from './components/Display/CounterInfo';
import Button from './components/ActionsBlock/Button';
import ActionsBlock from './components/ActionsBlock';
import CounterSettings from './components/Display/CounterSettings';
import Display from './components/Display';

export type CounterType = { min: number, current: number, max: number }

const App = () => {
    const [ counter, setCounter ] = useState<CounterType>(
        { min: 0, current: 0, max: 5 });
    const [ settingsMode, setSettingsMode ] = useState<boolean>(false);
    const [ error, setError ] = useState<boolean>(false);

    const checkCorrectCounter = (): void => {
        (counter.min >= counter.max) || (counter.min || counter.max) < 0 ?
        setError(true) : setError(false);
    };
    const changeSettingsMod = (): void => setSettingsMode(true);
    const increaseCounter = (): void => {
        if (counter.current < counter.max) {
            setCounter({ ...counter, current: counter.current + 1 });
            localStorage.setItem('counter',
                JSON.stringify({ ...counter, current: counter.current + 1 }));
        }
    };
    const resetCounter = (): void => {
        setCounter({ ...counter, current: counter.min });
        localStorage.setItem('counter',
            JSON.stringify({ ...counter, current: counter.min }));
    };
    const setCounterHandler = (): void => {
        if (error) return;
        setSettingsMode(false);
        localStorage.setItem('counter', JSON.stringify(counter));
    };

    useEffect(() => {
        const counterData = localStorage.getItem('counter');
        counterData && setCounter(JSON.parse(counterData));
    }, []);
    useEffect(checkCorrectCounter, [ counter ]);

    return (
        <div className="App">
            <CounterWrapper>
                <Display>
                    {
                        settingsMode ? (
                            <CounterSettings
                                counter={ counter }
                                error={ error }
                                setCounter={ setCounter }
                            />
                        ) : (
                            <CounterInfo
                                title={ counter.current }
                                error={ counter.current === counter.max }
                            />
                        )
                    }
                </Display>

                <ActionsBlock>
                    {
                        settingsMode ? (
                            <Button
                                name="set"
                                disabled={ error }
                                callback={ setCounterHandler }
                            />
                        ) : (
                            <>
                                <Button
                                    name="inc"
                                    callback={ increaseCounter }
                                    disabled={ counter.current === counter.max }
                                />
                                <Button
                                    name="reset"
                                    callback={ resetCounter }
                                    disabled={ counter.current === counter.min }
                                />
                                <Button
                                    name="settings"
                                    callback={ changeSettingsMod }
                                />
                            </>
                        )
                    }
                </ActionsBlock>
            </CounterWrapper>
        </div>
    );
};

export default App;
