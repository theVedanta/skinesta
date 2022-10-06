import styles from "@/styles/cart.module.css";
import { X } from "react-feather";

const CartItem = () => {
	return (
		<div className={styles.cartItem}>
			<button className={styles.removeBtn}>
				<X size="18" color="#555" />
			</button>
			<div className={styles.imgBox}>
				<img src="/product1.webp" />
			</div>
			<div className={styles.contentBox}>
				<h2 className={styles.itemName}>Smooth Lip Balm</h2>
				<p className={styles.price}>$20</p>
			</div>
		</div>
	);
};

export default CartItem;
