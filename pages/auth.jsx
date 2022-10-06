import Image from "next/image";
import styles from "@/styles/auth.module.css";
import AuthCard from "components/AuthCard";
import useEmblaCarousel from "embla-carousel-react";
import Google from "components/Google";
import CarouselNavigator from "components/CarouselNavigator";

const Auth = () => {
	const [emblaRef, embla] = useEmblaCarousel({
		loop: false,
	});

	return (
		<main className="main">
			<div className={styles.container}>
				<Image
					src="/auth-bg.png"
					layout="fill"
					style={{ zIndex: "-1" }}
					alt="img"
				/>
				<div className={styles.logo}>
					<Image src="/logo@2x.png" alt="img" />
				</div>

				<div className="embla" ref={emblaRef}>
					<div className="embla__container">
						<div className={`embla__slide`}>
							<AuthCard
								title="Personalised experience"
								image="/user_face.jpg"
							/>
						</div>
						<div className={`embla__slide`}>
							<AuthCard
								title="Personalised experience"
								image="/user_face.jpg"
							/>
						</div>
						<div className={`embla__slide`}>
							<AuthCard
								title="Personalised experience"
								image="/user_face.jpg"
							/>
						</div>
					</div>
					<CarouselNavigator embla={embla} />
					<Google />
				</div>
			</div>
		</main>
	);
};

export default Auth;
