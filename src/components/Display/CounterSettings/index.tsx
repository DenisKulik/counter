import { Dispatch, SetStateAction } from 'react';
import styles from './CounterSettings.module.scss';
import SuperInput from './Input';
import { CounterStateType } from '../../../App';

type CounterSettingsPropsType = {
    counter: CounterStateType
    setCounter: Dispatch<SetStateAction<CounterStateType>>
    checkCorrectNumber: () => void
}

const CounterSettings = (props: CounterSettingsPropsType) => {
    const {
        counter,
        setCounter,
        checkCorrectNumber
    } = props;

    const changeMinValue = (num: number) => {
        setCounter({ ...counter, current: num, min: num });
    };

    const changeMaxValue = (num: number) => {
        setCounter({ ...counter, max: num });
    };

    // TODO
    checkCorrectNumber();

    return (
        <div className={ styles.counterSettings }>
            <SuperInput title={ 'Max value' } type={ 'number' }
                        value={ counter.max }
                        callback={ (num) => changeMaxValue(num) } />
            <SuperInput title={ 'Start value' } type={ 'number' }
                        value={ counter.min }
                        callback={ (num) => changeMinValue(num) } />
        </div>
    );
};

export default CounterSettings;