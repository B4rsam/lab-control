"use client";

import useViewController from "@/src/page-container/Auth/useViewController";
import s from "./auth.module.css";

const AuthPageContainer = () => {
    const { onSubmit, onChange } = useViewController();

    return (
        <div className={s.main_container}>
            <div className={s.main_box}>
                <h1>Lab Control</h1>
                <form onSubmit={onSubmit}>
                    <input name="username" placeholder="Username" type="text" onChange={onChange} />
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={onChange}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AuthPageContainer;
