"use client";

import useViewController from "@/src/page-container/Auth/useViewController";

const AuthPageContainer = () => {
    const { onSubmit, onChange } = useViewController();

    return (
        <div className="main-container">
            <div className="main-box">
                <h1>Lab Control</h1>
                <form onSubmit={onSubmit}>
                    <input name="username" placeholder="Username" type="text" onChange={onChange} />
                    <input name="password" placeholder="Password" type="password" onChange={onChange} />
                    <button type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AuthPageContainer;
