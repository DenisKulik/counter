import React from 'react';
import styles from './CounterWrapper.module.scss';

type CounterWrapperPropsType = {
    children: React.ReactNode
}

const CounterWrapper: React.FC<CounterWrapperPropsType> = (props) => {
    const { children } = props;

    return (
        <div className={ styles.counterWrapper }>
            { children }
        </div>
    );
};

export default CounterWrapper;