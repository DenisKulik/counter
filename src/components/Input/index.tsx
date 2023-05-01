import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

type InputPropsType = {
    title: string
    type: string
    value: number
    error: boolean
    callback: (num: number) => void
}

const Input: React.FC<InputPropsType> = (props) => {
    const { title, type, value, error, callback } = props;

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value));
    };

    return (
        <label className={ `${ styles.input } ${ error ? styles.error : '' }` }>
            { title }
            <input onChange={ onChangeInputHandler } type={ type }
                   value={ value } />
        </label>
    );
};

export default Input;