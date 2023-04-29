import styles from './Display.module.scss';

type DisplayPropsType = {
    value: number
    message?: string | null
    isMaxValue: boolean
}

const Display = (props: DisplayPropsType) => {
    const { value, message, isMaxValue } = props;

    return (
        <div className={ `${ styles.display } ${
            isMaxValue ? styles.maxValue : ''
        }` }>
            { message ? message : value }
        </div>
    );
};

export default Display;