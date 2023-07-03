import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { AppRootStateType } from './state/store.ts';
import CounterWrapper from './components/CounterWrapper';
import CounterInfo from './components/Display/CounterInfo';
import Button from './components/ActionsBlock/Button';
import ActionsBlock from './components/ActionsBlock';
import CounterSettings from './components/Display/CounterSettings';
import Display from './components/Display';
import {
    changeMaxValueAC, changeMinValueAC, InitialStateType, increaseCounterAC,
    resetCounterAC
} from './state/counterReducer.ts';

const App = () => {
    const counter = useSelector<AppRootStateType, InitialStateType>(
        state => state.counter);
    const [ settingsMode, setSettingsMode ] = useState<boolean>(false);

    const dispatch = useDispatch();

    // TODO
    const isCorrectCounter = (): boolean => {
        return (counter.min < counter.max) && (counter.min && counter.max) >= 0;
    };
    const changeSettingsMod = (): void => {
        setSettingsMode(true);
    };
    const increaseCounter = (): void => {
        dispatch(increaseCounterAC());
    };
    const resetCounter = (): void => {
        dispatch(resetCounterAC());
    };
    const setCounterHandler = (): void => {
        setSettingsMode(false);
    };
    const changeMaxValue = (num: number): void => {
        dispatch(changeMaxValueAC(num));
    };
    const changeMinValue = (num: number): void => {
        dispatch(changeMinValueAC(num));
    };

    return (
        <div className="App">
            <CounterWrapper>
                <Display>
                    {
                        settingsMode ? (
                            <CounterSettings
                                error={!isCorrectCounter()}
                                counter={counter}
                                changeMaxValue={changeMaxValue}
                                changeMinValue={changeMinValue}
                            />
                        ) : (
                            <CounterInfo
                                title={counter.current}
                                error={counter.current === counter.max}
                            />
                        )
                    }
                </Display>

                <ActionsBlock>
                    {
                        settingsMode ? (
                            <Button
                                name="set"
                                disabled={!isCorrectCounter()}
                                callback={setCounterHandler}
                            />
                        ) : (
                            <>
                                <Button
                                    name="inc"
                                    callback={increaseCounter}
                                    disabled={counter.current === counter.max}
                                />
                                <Button
                                    name="reset"
                                    callback={resetCounter}
                                    disabled={counter.current === counter.min}
                                />
                                <Button
                                    name="settings"
                                    callback={changeSettingsMod}
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
