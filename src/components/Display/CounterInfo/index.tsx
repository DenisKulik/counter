import React from 'react';
import styles from './CounterInfo.module.scss';

type CounterInfoPropsType = {
    title: number
    error: boolean
}

const CounterInfo: React.FC<CounterInfoPropsType> = ({ title, error }) => {
    return (
        <div className={ `${ styles.CounterInfo } ${
            error ? styles.error : '' }` }>
            { title }
        </div>
    );
};

export default CounterInfo;