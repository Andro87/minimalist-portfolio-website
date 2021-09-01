import styles from "../styles/details.module.scss";
import Header from "../components/Header";
import SlideProject from "../components/SlideProject";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Link from "next/link";

import React, { useState } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
export default function Details() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const projects = [
        { name: "Manage" },
        { name: "Bookmark" },
        { name: "Insure" },
        { name: "Fylo" }
    ];
    const totalNumberOfSlide = 4;

    const [nextIndex, setNextIndex] = useState<number>(1);
    const [previousIndex, setPreviousIndex] = useState<number>(
        totalNumberOfSlide - 1
    );
    function getNextIndex(currentIndex, totalNumber) {
        var next = currentIndex + 1;
        if (next >= totalNumber) {
            return (next = 0);
        }
        return next;
    }

    function getPreviousIndex(currentIndex, totalNumber) {
        var previous = currentIndex - 1;
        if (previous < 0) {
            return (previous = totalNumber - 1);
        }
        return previous;
    }

    return (
        <div className={styles.main_container}>
            <Header />

            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <SlideProject
                            hero={
                                <picture>
                                    <source
                                        srcSet="/images/detail/desktop/image-manage-hero.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-manage-hero.jpg"
                                        media="(min-width:600px)"
                                    />
                                    <img
                                        src="/images/detail/mobile/image-manage-hero.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            name="Manage"
                            description="
                                        This project required me to build a
                                        fully responsive landing page to the
                                        designs provided. I used HTML5, along
                                        with CSS Grid and JavaScript for the
                                        areas that required interactivity, such
                                        as the testimonial slider.
                                    "
                            language=" HTML / CSS / JS"
                            button={
                                <Link href="/details">
                                    <a className={styles.button}>
                                        VISIT WEBSITE
                                    </a>
                                </Link>
                            }
                            detail="  
                                    This project was a front-end challenge from
                                    Frontend Mentor. It’s a platform that
                                    enables you to practice building websites to
                                    a design and project brief. Each challenge
                                    includes mobile and desktop designs to show
                                    how the website should look at different
                                    screen sizes. Creating these projects has
                                    helped me refine my workflow and solve
                                    real-world coding problems. I’ve learned
                                    something new with each project, helping me
                                    to improve and adapt my style.
                                "
                            first={
                                <picture className={styles.img_margin}>
                                    <source
                                        srcSet="/images/detail/desktop/image-manage-preview-1.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-manage-preview-1.jpg"
                                        media="(min-width:600px)"
                                    />

                                    <img
                                        src="/images/detail/mobile/image-manage-preview-1.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            second={
                                <picture>
                                    <source
                                        srcSet="/images/detail/desktop/image-manage-preview-2.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-manage-preview-2.jpg"
                                        media="(min-width:600px)"
                                    />
                                    <img
                                        src="/images/detail/mobile/image-manage-preview-2.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                        />
                        <SlideProject
                            hero={
                                <picture>
                                    <source
                                        srcSet="/images/detail/desktop/image-bookmark-hero.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-bookmark-hero.jpg"
                                        media="(min-width:600px)"
                                    />

                                    <img
                                        src="/images/detail/mobile/image-bookmark-hero.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            name="  Bookmark"
                            description="
                            This project required me to build a fully responsive landing page to the designs 
                            provided. I used HTML5, along with CSS Grid and JavaScript for the areas that 
                            required interactivity, such as the features section.
                                    "
                            language=" HTML / CSS / JS"
                            button={
                                <Link href="/details">
                                    <a className={styles.button}>
                                        VISIT WEBSITE
                                    </a>
                                </Link>
                            }
                            detail="  
                                    This project was a front-end challenge from
                                    Frontend Mentor. It’s a platform that
                                    enables you to practice building websites to
                                    a design and project brief. Each challenge
                                    includes mobile and desktop designs to show
                                    how the website should look at different
                                    screen sizes. Creating these projects has
                                    helped me refine my workflow and solve
                                    real-world coding problems. I’ve learned
                                    something new with each project, helping me
                                    to improve and adapt my style.
                                "
                            first={
                                <picture className={styles.img_margin}>
                                    <source
                                        srcSet="/images/detail/desktop/image-bookmark-preview-1.jpg"
                                        media="(min-width:900px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-bookmark-preview-1.jpg"
                                        media="(min-width:550px)"
                                    />
                                    <img
                                        src="/images/detail/mobile/image-bookmark-preview-1.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            second={
                                <picture>
                                    <source
                                        srcSet="/images/detail/desktop/image-bookmark-preview-2.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-bookmark-preview-2.jpg"
                                        media="(min-width:600px)"
                                    />
                                    <img
                                        src="/images/detail/mobile/image-bookmark-preview-2.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                        />
                        <SlideProject
                            hero={
                                <picture>
                                    <source
                                        srcSet="/images/detail/desktop/image-insure-hero.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-insure-hero.jpg"
                                        media="(min-width:600px)"
                                    />

                                    <img
                                        src="/images/detail/mobile/image-insure-hero.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            name="Insure"
                            description="
                            This was a small project which mostly consisted of HTML and CSS. I built a 
                            fully-responsive landing page. The only JavaScript this project required was 
                            to enable the toggling of the mobile navigation.
                                    "
                            language=" HTML / CSS / JS"
                            button={
                                <Link href="/details">
                                    <a className={styles.button}>
                                        VIEW PROJECT
                                    </a>
                                </Link>
                            }
                            detail="  
                                    This project was a front-end challenge from
                                    Frontend Mentor. It’s a platform that
                                    enables you to practice building websites to
                                    a design and project brief. Each challenge
                                    includes mobile and desktop designs to show
                                    how the website should look at different
                                    screen sizes. Creating these projects has
                                    helped me refine my workflow and solve
                                    real-world coding problems. I’ve learned
                                    something new with each project, helping me
                                    to improve and adapt my style.
                                "
                            first={
                                <picture className={styles.img_margin}>
                                    <source
                                        srcSet="/images/detail/desktop/image-insure-preview-1.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-insure-preview-1.jpg"
                                        media="(min-width:600px)"
                                    />

                                    <img
                                        src="/images/detail/mobile/image-insure-preview-1.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            second={
                                <picture>
                                    <source
                                        srcSet="/images/detail/desktop/image-insure-preview-2.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-insure-preview-2.jpg"
                                        media="(min-width:600px)"
                                    />
                                    <img
                                        src="/images/detail/mobile/image-insure-preview-2.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                        />
                        <SlideProject
                            hero={
                                <picture>
                                    <source
                                        srcSet="/images/detail/desktop/image-fylo-hero.jpg"
                                        media="(min-width:1000px)"
                                    />

                                    <source
                                        srcSet="/images/detail/tablet/image-fylo-hero.jpg"
                                        media="(min-width:600px)"
                                    />

                                    <img
                                        src="/images/detail/mobile/image-fylo-hero.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            name="Fylo"
                            description="
                        This project was built in pure HTML and CSS. I had mobile and desktop designs to 
                        work to and built it so that it was fully-responsive. I took a mobile-first approach 
                        and used modern CSS like Flexbox and Grid for layout purposes.
                                "
                            language=" HTML / CSS "
                            button={
                                <Link href="/details">
                                    <a className={styles.button}>
                                        VIEW PROJECT
                                    </a>
                                </Link>
                            }
                            detail="  
                                This project was a front-end challenge from
                                Frontend Mentor. It’s a platform that
                                enables you to practice building websites to
                                a design and project brief. Each challenge
                                includes mobile and desktop designs to show
                                how the website should look at different
                                screen sizes. Creating these projects has
                                helped me refine my workflow and solve
                                real-world coding problems. I’ve learned
                                something new with each project, helping me
                                to improve and adapt my style.
                            "
                            first={
                                <picture className={styles.img_margin}>
                                    <source
                                        srcSet="/images/detail/desktop/image-fylo-preview-1.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-fylo-preview-1.jpg"
                                        media="(min-width:600px)"
                                    />
                                    <img
                                        src="/images/detail/mobile/image-fylo-preview-1.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            second={
                                <picture>
                                    <source
                                        srcSet="/images/detail/desktop/image-fylo-preview-2.jpg"
                                        media="(min-width:1000px)"
                                    />
                                    <source
                                        srcSet="/images/detail/tablet/image-fylo-preview-2.jpg"
                                        media="(min-width:600px)"
                                    />
                                    <img
                                        src="/images/detail/mobile/image-fylo-preview-2.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                        />
                    </div>
                </div>
                <div className={styles.btn_container}>
                    <div className={styles.btn_wrap}>
                        <button
                            className={styles.btn_slide}
                            type="button"
                            aria-label="previous"
                            onClick={() => {
                                emblaApi.scrollPrev();

                                var current = emblaApi.selectedScrollSnap();
                                var pi = getPreviousIndex(
                                    current,
                                    totalNumberOfSlide
                                );
                                var ni = getNextIndex(
                                    current,
                                    totalNumberOfSlide
                                );
                                setPreviousIndex(pi);
                                setNextIndex(ni);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="16"
                            >
                                <path
                                    fill="none"
                                    stroke="#33323D"
                                    d="M9 0L1 8l8 8"
                                />
                            </svg>
                        </button>
                        <div className={`${styles.wrap} ${styles.prev}`}>
                            <span> {projects[previousIndex].name}</span>

                            <p>Previous Project</p>
                        </div>
                    </div>
                    <div className={`${styles.btn_wrap} ${styles.mobile_wrap}`}>
                        <div className={`${styles.wrap} ${styles.next}`}>
                            <span> {projects[nextIndex].name}</span>

                            <p>Next Project</p>
                        </div>
                        <button
                            className={styles.btn_slide}
                            onClick={() => {
                                emblaApi.scrollNext();

                                var current = emblaApi.selectedScrollSnap();

                                var ni = getNextIndex(
                                    current,
                                    totalNumberOfSlide
                                );

                                var pi = getPreviousIndex(
                                    current,
                                    totalNumberOfSlide
                                );

                                setNextIndex(ni);
                                setPreviousIndex(pi);
                            }}
                            type="button"
                            aria-label="next"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="16"
                            >
                                <path
                                    fill="none"
                                    stroke="#33323D"
                                    d="M1 0l8 8-8 8"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Contact padding="detail" />
            <Footer />
        </div>
    );
}
