import s from "./landing.module.css";

const LandingPageContainer = () => {
    return (
        <div className={s.mainBody}>
            <div className={s.mainContainer}>
                <section className={s.titleSection}>
                    <h1 className={s.mainTitle}>Welcome Username</h1>
                </section>
                <section className={s.contentSection}>Content goes here</section>
            </div>
        </div>
    );
};

export default LandingPageContainer;
