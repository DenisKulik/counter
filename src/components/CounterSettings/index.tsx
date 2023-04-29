import { Dispatch, SetStateAction } from 'react';
import { TypeValue } from '../../App';
import styles from './CounterSettings.module.scss';
import SuperInput from '../SuperInput';

type CounterSettingsPropsType = {
    startValue: number
    maxValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    setMessage: (message: string) => void
    isCorrectNumber: (num: number, type: TypeValue) => boolean | undefined
}

const CounterSettings = (props: CounterSettingsPropsType) => {
    const {
        startValue,
        maxValue,
        setStartValue,
        setMaxValue,
        setMessage,
        isCorrectNumber
    } = props;

    const changeValueHandler = (num: number, type: TypeValue) => {
        if (!isCorrectNumber(num, type)) setMessage('incorrect value');
        if (isCorrectNumber(num, type)) {
            setMessage(`enter values and press 'set'`);
        }

        type === 'max' ? setMaxValue(num) : setStartValue(num);
    };

    return (
        <div className={ styles.counterSettings }>
            <SuperInput title={ 'Max value' } type={ 'number' }
                        value={ maxValue }
                        callback={ (num) => changeValueHandler(num,
                            'max') } />
            <SuperInput title={ 'Start value' } type={ 'number' }
                        value={ startValue }
                        callback={ (num) => changeValueHandler(num,
                            'start') } />
        </div>
    );
};

export default CounterSettings;