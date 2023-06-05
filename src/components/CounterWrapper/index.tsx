import { FC, PropsWithChildren } from 'react';
import styles from './CounterWrapper.module.scss';

const CounterWrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.counterWrapper}>
            {children}
        </div>
    );
};

export default CounterWrapper;