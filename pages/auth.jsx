import Image from "next/image";
import styles from "@/styles/auth.module.css";
import AuthCard from "components/AuthCard";
import useEmblaCarousel from "embla-carousel-react";
import Google from "components/Google";
import CarouselNavigator from "components/CarouselNavigator";
import bg from "../public/auth-bg.png";
import logo from "../public/logo@2x.png";
import face from "../public/user_face.jpg";

const Auth = ({ setAuthed, setUser, authed }) => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: false });

    return (
        <>
            {authed === "check" ? (
                <>Loading...</>
            ) : !authed ? (
                <main className="main">
                    <div className={styles.container}>
                        <Image
                            // src={"/auth-bg.png"}
                            src={bg}
                            layout="fill"
                            style={{ zIndex: "-1" }}
                            alt="img"
                        />
                        {/* <h1 className={styles.title}>Skinesta</h1> */}
                        <div className={styles.logo}>
                            <Image
                                // src={"/logo@2x.png"}
                                src={logo}
                                width="300"
                                height="60"
                                alt="img"
                            />
                        </div>

                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container">
                                <div className={`embla__slide`}>
                                    <AuthCard
                                        title="Personalised experience"
                                        image={face}
                                    />
                                </div>
                                <div className={`embla__slide`}>
                                    <AuthCard
                                        title="Personalised experience"
                                        image={face}
                                    />
                                </div>
                                <div className={`embla__slide`}>
                                    <AuthCard
                                        title="Personalised experience"
                                        image={face}
                                    />
                                </div>
                            </div>
                            <ul className="embla__navigation">
                                <li onClick={() => embla.scrollTo(0)}></li>
                                <li onClick={() => embla.scrollTo(1)}></li>
                                <li onClick={() => embla.scrollTo(2)}></li>
                            </ul>
                            <CarouselNavigator embla={embla} />
                            <Google setAuthed={setAuthed} setUser={setUser} />
                        </div>
                    </div>
                </main>
            ) : (
                <>
                    Loading...
                    {(window.location.href = "/home")}
                </>
            )}
        </>
    );
};

export default Auth;
