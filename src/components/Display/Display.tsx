import styles from './Display.module.css';

type DisplayPropsType = {
    value: number
    isMaxValue: boolean
}

const Display = (props: DisplayPropsType) => {
    const { value, isMaxValue } = props;

    return (
        <div className={ `${ styles.display } ${
            isMaxValue ? styles.maxValue : ''
        }` }>
            { value }
        </div>
    );
};

export default Display;