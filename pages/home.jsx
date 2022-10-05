import Container from "components/Container";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import ScheduleContainer from "components/ScheduleContainer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ShopBannerCard from "components/ShopBannerCard";

const ScheduleData = [
    {
        date: "Today",
        data: [
            {
                name: "Exfoliate with acne control",
                time: "Today - 9:00 PM",
            },
            {
                name: "Exfoliate with acne control",
                time: "Today - 9:00 PM",
            },
            {
                name: "Exfoliate with acne control",
                time: "Today - 9:00 PM",
            },
        ],
    },
];

const Home = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);

    return (
        <Container>
            <div className={styles.logo}>
                <Image
                    src={require("@/public/logo@2x.png")}
                    width="200"
                    height="50"
                    alt="alt"
                />
            </div>
            <div className={styles.container}>
                <h1 className={styles.welcomeText}>
                    Welcome <br />
                    Vedanta
                </h1>
                <ScheduleContainer
                    scheduleData={ScheduleData}
                    containerStyle={{ padding: "0rem 0" }}
                />

                <div className={styles.trendingSection}>
                    <h3 className={styles.trendingSectionTitle}>Trending</h3>
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            <div className={`embla__slide`}>
                                <ShopBannerCard
                                    image={require("@/public/banner1.png")}
                                    bannerCardStyle={{
                                        marginLeft: 0,
                                        marginRight: 0,
                                    }}
                                />
                            </div>
                            <div className={`embla__slide`}>
                                <ShopBannerCard
                                    image={require("@/public/banner1.png")}
                                    bannerCardStyle={{
                                        marginLeft: 0,
                                        marginRight: 0,
                                    }}
                                />
                            </div>
                            <div className={`embla__slide`}>
                                <ShopBannerCard
                                    image={require("@/public/banner1.png")}
                                    bannerCardStyle={{
                                        marginLeft: 0,
                                        marginRight: 0,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;
