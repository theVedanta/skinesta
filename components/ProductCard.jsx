import styles from "@/styles/shop.module.css";
import Image from "next/image";

const ProductCard = () => {
	return (
		<div className={styles.productCard}>
			<div className={styles.productImgBox}>
				<Image layout="fill" src={require("../public/product1.webp")} />
			</div>
			<h3 className={styles.productName}>Deep skin cleanser</h3>
			<h3 className={styles.brand}>Aurora</h3>
			<button className={styles.productBtn}>Buy Now</button>
		</div>
	);
};

export default ProductCard;
