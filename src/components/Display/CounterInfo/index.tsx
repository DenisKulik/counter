import styles from './CounterInfo.module.scss';

type CounterInfoPropsType = {
    title: number
    isMaxValue: boolean
}

const CounterInfo = (props: CounterInfoPropsType) => {
    const { title, isMaxValue } = props;

    return (
        <div className={ `${ styles.display } ${
            isMaxValue ? styles.maxValue : '' }` }>
            { title }
        </div>
    );
};

export default CounterInfo;