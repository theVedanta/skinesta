import { useEffect } from "react";

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("authToken");
        window.location.href = "/";
    }, []);
    return <div></div>;
};

export default Logout;
