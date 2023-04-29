import { ChangeEvent } from 'react';
import styles from './SuperInput.module.scss';

type SuperInputPropsType = {
    title: string
    type: string
    value: number
    callback: (num: number) => void
}

const SuperInput = (props: SuperInputPropsType) => {
    const { title, type, value, callback } = props;
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value));
    };

    return (
        <label className={ styles.superInput }>
            { title }
            <input onChange={ onChangeInputHandler } type={ type }
                   value={ value } />
        </label>
    );
};

export default SuperInput;