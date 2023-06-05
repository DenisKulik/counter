import React from 'react';
import styles from './Button.module.scss';

type DefaultButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonType & {
    name: string
    disabled?: boolean
    callback: () => void
}

const Button: React.FC<ButtonPropsType> = ({
    name,
    disabled,
    callback,
    ...restProps
}) => {
    return (
        <button
            className={styles.button}
            onClick={callback}
            disabled={disabled}
            {...restProps}
        >
            {name}
        </button>
    );
};

export default Button;