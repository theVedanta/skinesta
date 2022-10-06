import styles from "@/styles/shop.module.css";
import Link from "next/link";

const ProductCard = ({ image, name, brand, id, cart, setCart }) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.productImgBox}>
                <img className={styles.prodImg} src={image} />
            </div>
            <Link href="/shop/productName">
                <a className={styles.productName}>{name}</a>
            </Link>
            <h3 className={styles.brand}>{brand}</h3>
            {cart && !cart.includes(id) && (
                <button
                    className={styles.productBtn}
                    onClick={() => setCart([...cart, id])}
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default ProductCard;
