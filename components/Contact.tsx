import styles from "./Contact.module.scss";
import Link from "next/link";
interface Props {
    readonly padding: string;
}

const Contact: React.FunctionComponent<Props> = props => {
    const { padding } = props;
    return (
        <section
            className={`${styles.contact_me} ${styles[padding]}`}
            aria-label="contact me"
        >
            <h2> Interested in doing a project together?</h2>
            <div className={styles.line}></div>
            <Link href="/contactme">
                <a className={styles.button}>CONTACT ME</a>
            </Link>
        </section>
    );
};
export default Contact;
