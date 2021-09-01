import styles from "./Button.module.scss";

interface Props {
    readonly title: string;
}
const Button: React.FunctionComponent<Props> = props => {
    const { title } = props;
    return <a className={styles.button}>{title}</a>;
};
export default Button;
