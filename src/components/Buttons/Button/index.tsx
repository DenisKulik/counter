import React from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
    name: string
    disabled?: boolean
    callback: () => void
}

const Button: React.FC<ButtonPropsType> = ({ name, disabled, callback }) => {
    return (
        <button className={ styles.button } onClick={ callback }
                disabled={ disabled }>
            { name }
        </button>
    );
};

export default Button;