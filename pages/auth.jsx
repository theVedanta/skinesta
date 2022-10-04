import Image from "next/image";
import styles from "../styles/auth.module.css";

const auth = () => {
    return (
        <>
            <div style={{ width: "100vw", height: "100vh" }}>
                {/* <Image src={require("../public/auth-bg.png")} /> */}
                <h1 className={styles.title}>Skinesta</h1>
            </div>
        </>
    );
};

export default auth;
