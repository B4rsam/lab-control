"use client";

import { Suspense } from "react";
import s from "./landing.module.css";
import useViewController from "./useViewController";

const LandingPageContainer = () => {
    const { username, stats } = useViewController();

    return (
        <div className={s.mainBody}>
            <div className={s.mainContainer}>
                <section className={s.titleSection}>
                    <Suspense>
                        <h1 className={s.mainTitle}>Welcome {username}</h1>
                    </Suspense>
                </section>
                <Suspense>
                    <section className={s.contentSection}>
                        <section className={s.subContentSection}>
                            <h1>Battery: </h1>
                            <p>{stats?.battery?.percent}</p>
                            <p>{stats?.battery?.isCharging ? "Charging" : "Discharging"}</p>
                        </section>
                        <section className={s.subContentSection}>
                            <h1>CPU: </h1>
                            <p>{stats?.cpu?.brand}</p>
                            <p>{stats?.cpu?.speed}</p>
                            <p>{stats?.cpu?.speedMax}</p>
                            <p>{stats?.cpu?.speedMin}</p>
                        </section>
                    </section>
                </Suspense>
            </div>
        </div>
    );
};

export default LandingPageContainer;
