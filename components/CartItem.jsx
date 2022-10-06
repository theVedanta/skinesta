import styles from "@/styles/cart.module.css";
import { X } from "react-feather";
import BASE_API_URL from "../constants";

const CartItem = ({ product, cart, setCart, user }) => {
    const removeItem = async (id) => {
        const editedJson = await fetch(
            `${BASE_API_URL}/shop/cart?id=${user && user._id && user._id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cart: cart.filter((item) => item !== id),
                }),
            }
        );
        const edited = await editedJson.json();
        if (edited.done) setCart(cart.filter((item) => item !== id));
    };

    return (
        <div className={styles.cartItem}>
            <button
                onClick={() => removeItem(product._id)}
                className={styles.removeBtn}
            >
                <X size="18" color="#555" />
            </button>
            <div className={styles.imgBox}>
                <img src={product && product.img} />
            </div>
            <div className={styles.contentBox}>
                <h2 className={styles.itemName}>{product && product.name}</h2>
                <p className={styles.price}>${product && product.price}</p>
            </div>
        </div>
    );
};

export default CartItem;
