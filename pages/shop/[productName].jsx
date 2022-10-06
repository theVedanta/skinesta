import styles from "@/styles/product.module.css";
import BackBtn from "components/BackBtn";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigator from "components/CarouselNavigator";

const images = [0, 1, 2, 3, 4, 5];

const ProductName = () => {
	const [emblaRef, embla] = useEmblaCarousel({
		loop: false,
	});

	return (
		<>
			<div className={styles.topContainer}>
				<div className={styles.header}>
					<BackBtn />
					<h2>Product Name</h2>
				</div>
				<div className="embla" ref={emblaRef}>
					<div className="embla__container">
						{images.map((image, index) => {
							return (
								<div className={`embla__slide`} key={index}>
									<div className={styles.imageBox}>
										<Image
											src="/product1.webp"
											layout="fill"
										/>
									</div>
								</div>
							);
						})}
					</div>

					<CarouselNavigator embla={embla} />
				</div>
			</div>

			<h1 className={styles.productName}>Deep Skin Cleaner</h1>
		</>
	);
};

export default ProductName;
