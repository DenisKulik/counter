import React from 'react';
import styles from './ActionsBlock.module.scss';

type ActionsBlockPropsType = { children: React.ReactNode }

const ActionsBlock: React.FC<ActionsBlockPropsType> = ({ children }) => {
    return (
        <div className={ styles.actionsBlock }>
            { children }
        </div>
    );
};

export default ActionsBlock;