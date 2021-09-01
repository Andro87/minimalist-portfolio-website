import styles from "./Header.module.scss";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
const Header: React.FunctionComponent = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    return (
        <header className={styles.header}>
            <img src="/images/logo.svg" alt="logo" />
            <button
                type="button"
                title="hamburger_btn"
                className={styles.hamburger_btn}
                onClick={() => setOpen(!open)}
            >
                {!open ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="13"
                    >
                        <g fill="#33323D" fillRule="evenodd">
                            <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
                        </g>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                    >
                        <path
                            fill="#33323D"
                            fillRule="evenodd"
                            d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
                        />
                    </svg>
                )}
            </button>
            <nav
                className={`${styles.navigation}    ${
                    open ? styles.navigation_mobile : null
                } `}
            >
                <Link href="/">
                    <a
                        className={
                            router.pathname == "/" ? styles.active : null
                        }
                    >
                        HOME
                    </a>
                </Link>
                <Link href="/portfolio">
                    <a
                        className={
                            router.pathname == "/portfolio"
                                ? styles.active
                                : null
                        }
                    >
                        PORTFOLIO
                    </a>
                </Link>
                <Link href="/contactme">
                    <a
                        className={
                            router.pathname == "/contactme"
                                ? styles.active
                                : null
                        }
                    >
                        CONTACT ME
                    </a>
                </Link>
            </nav>
        </header>
    );
};
export default Header;
