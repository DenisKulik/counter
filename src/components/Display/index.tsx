import styles from './Display.module.scss';
import React from 'react';

export type DisplayWrapperPropsType = {
    children: React.ReactNode
}

const Display = (props: DisplayWrapperPropsType) => {
    const { children } = props;

    return (
        <div className={ `${ styles.display }` }>
            { children }
        </div>
    );
};

export default Display;