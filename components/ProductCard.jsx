import styles from "@/styles/shop.module.css";
import Image from "next/image";

const ProductCard = ({ image, name, brand }) => {
	return (
		<div className={styles.productCard}>
			<div className={styles.productImgBox}>
				<Image layout="fill" src={image} />
			</div>
			<h3 className={styles.productName}>{name}</h3>
			<h3 className={styles.brand}>{brand}</h3>
			<button className={styles.productBtn}>Buy Now</button>
		</div>
	);
};

export default ProductCard;
