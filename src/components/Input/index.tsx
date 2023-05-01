import React, { ChangeEvent, DetailedHTMLProps } from 'react';
import styles from './Input.module.scss';


type DefaultInputProps = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = DefaultInputProps & {
    title: string
    type: string
    value?: number
    error?: boolean
    callback?: (num: number) => void
};

const Input: React.FC<InputPropsType> = (props) => {
    const { title, type, value, error, callback, ...rest } = props;

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback && callback(Number(e.currentTarget.value));
    };

    return (
        <label className={ `${ styles.input } ${ error ? styles.error : '' }` }>
            { title }
            <input onChange={ onChangeInputHandler }
                   type={ type }
                   value={ value }
                   { ...rest }
            />
        </label>
    );
};

export default Input;