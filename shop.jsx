import styles from "@/styles/shop.module.css";
import ProductCard from "components/ProductCard";
import SearchBar from "components/SearchBar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ShopBannerCard from "components/ShopBannerCard";

const Shop = () => {
	const [emblaRef] = useEmblaCarousel({ loop: false }, [
		Autoplay({ playOnInit: true, delay: 3000 }),
	]);

	return (
		<>
			<SearchBar />
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					<div className={`embla__slide`}>
						<ShopBannerCard />
					</div>
					<div className={`embla__slide`}>
						<ShopBannerCard />
					</div>
					<div className={`embla__slide`}>
						<ShopBannerCard />
					</div>
					<div className={`embla__slide`}>
						<ShopBannerCard />
					</div>
					<div className={`embla__slide`}>
						<ShopBannerCard />
					</div>
					<div className={`embla__slide`}>
						<ShopBannerCard />
					</div>
				</div>
			</div>

			<div className={styles.section}>
				<h2 className={styles.sectionTitle}>Best Seller</h2>
				<div className={styles.contentContainer}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</>
	);
};

export default Shop;
