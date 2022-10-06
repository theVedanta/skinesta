import styles from "@/styles/shop.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, name, brand }) => {
	return (
		<div className={styles.productCard}>
			<div className={styles.productImgBox}>
				<img className={styles.prodImg} src={image} />
			</div>
			<Link href="/shop/productName">
				<a className={styles.productName}>{name}</a>
			</Link>
			<h3 className={styles.brand}>{brand}</h3>
			<button className={styles.productBtn}>Add to Cart</button>
		</div>
	);
};

export default ProductCard;
