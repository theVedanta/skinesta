import styles from "@/styles/cart.module.css";
import BackBtn from "components/BackBtn";
import CartItem from "components/CartItem";

const cart = () => {
	return (
		<>
			<div className={styles.header}>
				<BackBtn />
				<h2>Cart</h2>
			</div>

			<div className={styles.cardItemContainer}>
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</div>
			<div className={styles.bottomContainer}>
				<h2 className={styles.totalPrice}>Total: $20.00</h2>
				<button>Proceed to checkout</button>
			</div>
		</>
	);
};

export default cart;
