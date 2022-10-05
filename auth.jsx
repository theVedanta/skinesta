import Image from "next/image";
import styles from "../styles/auth.module.css";
import AuthCard from "components/AuthCard";
import useEmblaCarousel from "embla-carousel-react";

const auth = () => {
	const [emblaRef] = useEmblaCarousel({ loop: false });
	return (
		<>
			<div className={styles.container}>
				<Image
					src={require("../public/auth-bg.png")}
					layout="fill"
					style={{ zIndex: "-1" }}
				/>
				<h1 className={styles.title}>Skinesta</h1>

				<div className="embla" ref={emblaRef}>
					<div className="embla__container">
						<div className={`embla__slide`}>
							<AuthCard />
						</div>
						<div className={`embla__slide`}>
							<AuthCard />
						</div>
						<div className={`embla__slide`}>
							<AuthCard />
						</div>
					</div>
					<ul className="embla__navigation">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default auth;
