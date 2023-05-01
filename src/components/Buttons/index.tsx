import React from 'react';
import styles from './Buttons.module.scss';

type ButtonsPropsType = { children: React.ReactNode }

const Buttons: React.FC<ButtonsPropsType> = ({ children }) => {
    return (
        <div className={ styles.buttons }>
            { children }
        </div>
    );
};

export default Buttons;