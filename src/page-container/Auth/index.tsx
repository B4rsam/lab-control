import useViewController from "@/src/page-container/Auth/useViewController";

const AuthPageContainer = () => {
    const {} = useViewController();

    return (
        <div className="main-container">
            <div className="main-box">
                <h1>Lab Control</h1>
                <div>
                    <input />
                    <input />
                    <button />
                </div>
            </div>
        </div>
    );
};

export default AuthPageContainer;
