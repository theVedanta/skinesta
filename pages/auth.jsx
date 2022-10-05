import Image from "next/image";
import styles from "../styles/auth.module.css";
import AuthCard from "components/AuthCard";
import useEmblaCarousel from "embla-carousel-react";
import Google from "components/Google";

const Auth = () => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: false });
    return (
        <main className="main">
            <div className={styles.container}>
                <Image
                    src={require("../public/auth-bg.png")}
                    layout="fill"
                    style={{ zIndex: "-1" }}
                    alt="img"
                />
                {/* <h1 className={styles.title}>Skinesta</h1> */}
                <div className={styles.logo}>
                    <Image src={require("../public/logo@2x.png")} alt="img" />
                </div>

                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div className={`embla__slide`}>
                            <AuthCard
                                title="Personalised experience"
                                image={require("../public/user_face.jpg")}
                            />
                        </div>
                        <div className={`embla__slide`}>
                            <AuthCard
                                title="Personalised experience"
                                image={require("../public/user_face.jpg")}
                            />
                        </div>
                        <div className={`embla__slide`}>
                            <AuthCard
                                title="Personalised experience"
                                image={require("../public/user_face.jpg")}
                            />
                        </div>
                    </div>
                    <ul className="embla__navigation">
                        <li onClick={() => embla.scrollTo(0)}></li>
                        <li onClick={() => embla.scrollTo(1)}></li>
                        <li onClick={() => embla.scrollTo(2)}></li>
                    </ul>
                    <Google />
                </div>
            </div>
        </main>
    );
};

export default Auth;
