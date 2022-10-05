import Image from "next/image";
import styles from "@/styles/shop.module.css";

const ShopBannerCard = ({ image, bannerCardStyle }) => {
	return (
		<div className={styles.banner_card} style={bannerCardStyle}>
			<Image layout="fill" src={image} style={{ borderRadius: "13px" }} />
		</div>
	);
};

export default ShopBannerCard;
