import Container from "components/Container";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import ScheduleContainer from "components/ScheduleContainer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ShopBannerCard from "components/ShopBannerCard";
import Protected from "components/Protected";
import { useEffect, useState } from "react";
import BASE_API_URL from "../constants";

const Home = ({ authed, user }) => {
	const [emblaRef] = useEmblaCarousel({ loop: false }, [
		Autoplay({ playOnInit: true, delay: 3000 }),
	]);
	const [scheduleData, setScheduleData] = useState({});

	useEffect(() => {
		const getSched = async () => {
			const scheduleJson = await fetch(
				`${BASE_API_URL}/shop/schedule?id=${user._id}`
			);
			let schedule = await scheduleJson.json();
			schedule = schedule.schedule;
			schedule !== undefined
				? setScheduleData(schedule)
				: (window.location.href = "/upload");
		};

		getSched();
	}, [user._id, user]);

	return (
		<Protected authed={authed}>
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
					{scheduleData && (
						<ScheduleContainer
							scheduleData={scheduleData}
							containerStyle={{ padding: "0rem 0" }}
						/>
					)}
					<div className={styles.trendingSection}>
						<h3 className={styles.trendingSectionTitle}>
							Trending
						</h3>
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
		</Protected>
	);
};

export default Home;
