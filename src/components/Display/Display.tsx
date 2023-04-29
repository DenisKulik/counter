import styles from './Display.module.scss';

type DisplayPropsType = {
    title: string | number
    isMaxValue: boolean
}

const Display = (props: DisplayPropsType) => {
    const { title, isMaxValue } = props;

    return (
        <div className={ `${ styles.display } ${
            typeof title === 'string' ? styles.message : '' } ${
            (isMaxValue || title === 'incorrect value') ? styles.maxValue : ''
        }` }>
            { title }
        </div>
    );
};

export default Display;