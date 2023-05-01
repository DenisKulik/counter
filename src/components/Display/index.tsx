import styles from './Display.module.scss';
import React from 'react';

type DisplayPropsType = { children: React.ReactNode }

const Display: React.FC<DisplayPropsType> = ({ children }) => {
    return (
        <div className={ styles.display }>
            { children }
        </div>
    );
};

export default Display;