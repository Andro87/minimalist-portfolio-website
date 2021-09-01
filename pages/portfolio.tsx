import Head from "next/head";
import styles from "../styles/portfolio.module.scss";
import Header from "../components/Header";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Portfolio() {
    return (
        <div className={styles.main_container}>
            <Head>
                <title>Frontend Mentor | Minimalist Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/favicon-32x32.png" />
            </Head>
            <Header />

            <Project
                label="manage"
                picture={
                    <picture>
                        <source
                            srcSet="/images/portfolio/desktop/image-portfolio-manage.jpg"
                            media="(min-width:900px)"
                        />
                        <source
                            srcSet="/images/portfolio/tablet/image-portfolio-manage.jpg"
                            media="(min-width:550px)"
                        />

                        <img
                            src="/images/portfolio/mobile/image-portfolio-manage.jpg"
                            alt=""
                        />
                    </picture>
                }
                name=" Manage"
                info="
                        This project required me to build a fully responsive
                        landing page to the designs provided. I used HTML5,
                        along with CSS Grid and JavaScript for the areas that
                        required interactivity, such as the testimonial slider.
                    "
                button={
                    <Link href="/details">
                        <a className={styles.button}>VIEW PROJECT</a>
                    </Link>
                }
            />

            <Project
                label="bookmark"
                picture={
                    <picture>
                        <source
                            srcSet="/images/portfolio/desktop/image-portfolio-bookmark.jpg"
                            media="(min-width:900px)"
                        />

                        <source
                            srcSet="/images/portfolio/tablet/image-portfolio-bookmark.jpg"
                            media="(min-width:550px)"
                        />
                        <img
                            src="/images/portfolio/mobile/image-portfolio-bookmark.jpg"
                            alt=""
                        />
                    </picture>
                }
                name=" Bookmark"
                info="
                This project required me to build a fully responsive landing page to the designs provided. I 
                used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
                as the features section.
                    "
                button={
                    <Link href="/details">
                        <a className={styles.button}>VIEW PROJECT</a>
                    </Link>
                }
                direction="direction"
            />

            <Project
                label="insure"
                picture={
                    <picture>
                        <source
                            srcSet="/images/portfolio/desktop/image-portfolio-insure.jpg"
                            media="(min-width:900px)"
                        />
                        <source
                            srcSet="/images/portfolio/tablet/image-portfolio-insure.jpg"
                            media="(min-width:550px)"
                        />
                        <img
                            src="/images/portfolio/mobile/image-portfolio-insure.jpg"
                            alt=""
                        />
                    </picture>
                }
                name="   Insure"
                info="
                This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
                landing page. The only JavaScript this project required was to enable the toggling of the 
                mobile navigation.
                    "
                button={
                    <Link href="/details">
                        <a className={styles.button}>VIEW PROJECT</a>
                    </Link>
                }
            />

            <Project
                label="fylo"
                picture={
                    <picture>
                        <source
                            srcSet="/images/portfolio/desktop/image-portfolio-fylo.jpg"
                            media="(min-width:900px)"
                        />
                        <source
                            srcSet="/images/portfolio/tablet/image-portfolio-fylo.jpg"
                            media="(min-width:550px)"
                        />
                        <img
                            src="/images/portfolio/mobile/image-portfolio-fylo.jpg"
                            alt=""
                        />
                    </picture>
                }
                name=" Fylo"
                info="
                This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
  built it so that it was fully-responsive. I took a mobile-first approach and used modern 
  CSS like Flexbox and Grid for layout purposes.
                    "
                button={
                    <Link href="/details">
                        <a className={styles.button}>VIEW PROJECT</a>
                    </Link>
                }
                direction="direction"
            />
            <Contact padding="portfolio" />
            <Footer />
        </div>
    );
}