import styles from './SuperButton.module.css';

type SuperButtonPropsType = {
    name: string
    disabled: boolean
    callback: () => void
}

const SuperButton = (props: SuperButtonPropsType) => {
    const { name, disabled, callback } = props;

    return (
        <button className={ styles.superButton } onClick={ callback }
                disabled={ disabled }>
            { name }
        </button>
    );
};

export default SuperButton;