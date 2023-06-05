import React from 'react';
import styles from './CounterSettings.module.scss';
import Input from '../../Input';
import { CounterType } from '../../../App';

type CounterSettingsPropsType = {
    counter: CounterType
    error: boolean
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

const CounterSettings: React.FC<CounterSettingsPropsType> = (props) => {
    const { counter, error, changeMaxValue, changeMinValue } = props;

    return (
        <div className={styles.counterSettings}>
            <Input
                title={'Max value'}
                type={'number'}
                value={counter.max}
                error={error}
                callback={(num) => changeMaxValue(num)}
            />
            <Input
                title={'Min value'}
                type={'number'}
                value={counter.min}
                error={error}
                callback={(num) => changeMinValue(num)}
            />
        </div>
    );
};

export default CounterSettings;