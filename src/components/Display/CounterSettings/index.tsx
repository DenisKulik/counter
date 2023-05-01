import React, { Dispatch, SetStateAction } from 'react';
import styles from './CounterSettings.module.scss';
import Input from '../../Input';
import { CounterType } from '../../../App';

type CounterSettingsPropsType = {
    counter: CounterType
    error: boolean
    setCounter: Dispatch<SetStateAction<CounterType>>
}

const CounterSettings: React.FC<CounterSettingsPropsType> = (props) => {
    const { counter, error, setCounter } = props;

    const changeMinValue = (num: number) => setCounter(
        { ...counter, current: num, min: num });
    const changeMaxValue = (num: number) => setCounter(
        { ...counter, current: counter.min, max: num });

    return (
        <div className={ styles.counterSettings }>
            <Input title={ 'Max value' }
                   type={ 'number' }
                   value={ counter.max }
                   error={ error }
                   callback={ (num) => changeMaxValue(num) }
            />
            <Input title={ 'Min value' } type={ 'number' }
                   value={ counter.min } error={ error }
                   callback={ (num) => changeMinValue(num) } />
        </div>
    );
};

export default CounterSettings;