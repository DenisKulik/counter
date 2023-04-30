import React from 'react';
import styles from './ButtonWrapper.module.scss';

type ButtonWrapperPropsType = {
    children: React.ReactNode
}

const ButtonWrapper: React.FC<ButtonWrapperPropsType> = (props) => {
    const { children } = props;

    return (
        <div className={ styles.buttonWrapper }>
            { children }
        </div>
    );
};

export default ButtonWrapper;