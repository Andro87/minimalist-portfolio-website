import styles from "./SlideProject.module.scss";
import { ReactNode } from "react";
interface Props {
    readonly hero: ReactNode;
    readonly name: string;
    readonly description: string;
    readonly language: string;
    readonly button: ReactNode;
    readonly detail: string;
    readonly first: ReactNode;
    readonly second: ReactNode;
}
const SlideProject: React.FunctionComponent<Props> = props => {
    const { hero, name, description, language, button, detail, first, second } =
        props;
    return (
        <div className={styles.embla__slide}>
            {hero}
            <div className={styles.wrap}>
                <div className={styles.project_intro}>
                    <div className={styles.intro}>
                        <h2>{name}</h2>
                        <p className={styles.description}>{description}</p>
                        <div className={styles.details}>
                            <p>Interaction Design / Front End Development</p>
                            <p> {language}</p>
                        </div>
                        {button}
                    </div>
                </div>
                <div className={styles.project_info}>
                    <h3> Project Background</h3>
                    <p>{detail}</p>
                    <h3> Static Previews</h3>
                    {first}
                    {second}
                </div>
            </div>
        </div>
    );
};
export default SlideProject;
