"use client";

import { Suspense } from "react";
import s from "./landing.module.css";
import useViewController from "./useViewController";

const LandingPageContainer = () => {
    const { username } = useViewController();

    return (
        <div className={s.mainBody}>
            <div className={s.mainContainer}>
                <section className={s.titleSection}>
                    <Suspense>
                        <h1 className={s.mainTitle}>Welcome {username}</h1>
                    </Suspense>
                </section>
                <section className={s.contentSection}>Content goes here</section>
            </div>
        </div>
    );
};

export default LandingPageContainer;
