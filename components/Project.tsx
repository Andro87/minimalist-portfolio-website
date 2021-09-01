import styles from "./Project.module.scss";
import { ReactNode } from "react";
interface Props {
    readonly picture: ReactNode;
    readonly name: string;
    readonly info: string;
    readonly button?: ReactNode;
    readonly direction?: string;
    readonly label: string;
}

const Project: React.FunctionComponent<Props> = props => {
    const { picture, name, info, button, direction, label } = props;
    return (
        <section
            className={`${styles.project_container} ${styles[direction]}`}
            arial-label={label}
        >
            {picture}

            <div className={styles.project_info}>
                <h2> {name}</h2>
                <p>{info}</p>
                {button}
            </div>
        </section>
    );
};
export default Project;
