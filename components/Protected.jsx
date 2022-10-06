const Protected = ({ children, authed }) => {
    return (
        <>
            {authed === "check" ? (
                "Loading..."
            ) : authed ? (
                children
            ) : (
                <>{(window.location.href = "/auth")}</>
            )}
        </>
    );
};

export default Protected;
