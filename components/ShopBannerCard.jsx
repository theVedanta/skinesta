import Image from "next/image";
import styles from "@/styles/shop.module.css";

const ShopBannerCard = () => {
	return (
		<div className={styles.banner_card}>
			<Image
				layout="fill"
				src={require("../public/banner1.png")}
				style={{ borderRadius: "13px" }}
			/>
		</div>
	);
};

export default ShopBannerCard;
