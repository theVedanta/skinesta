import styles from "@/styles/cart.module.css";
import BackBtn from "components/BackBtn";
import CartItem from "components/CartItem";
import { useEffect, useState } from "react";
import BASE_API_URL from "../../constants";

const Cart = ({ cart, setCart, user }) => {
    const [products, setProducts] = useState([]);
    const [pr, setPr] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            const prodsJson = await fetch(`${BASE_API_URL}/shop/cart-items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cart }),
            });
            const prods = await prodsJson.json();

            let totalPr = 0;
            prods.prods.map((prod) => (totalPr += prod.price));
            setPr(totalPr);

            setProducts(prods.prods);
        };

        getProducts();
    }, [cart]);

    const clearCart = async () => {
        const editedJson = await fetch(
            `${BASE_API_URL}/shop/cart?id=${user && user._id && user._id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cart: [],
                }),
            }
        );
        const edited = await editedJson.json();
        if (edited.done) setCart([]);
    };

    return (
        <>
            <div className={styles.header}>
                <BackBtn />
                <h2>Cart</h2>
            </div>

            <div className={styles.cardItemContainer}>
                {products.map((product, i) => (
                    <CartItem
                        key={i}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                        user={user}
                    />
                ))}
            </div>
            <div className={styles.bottomContainer}>
                <h2 className={styles.totalPrice}>Total: ${pr}</h2>
                <button onClick={clearCart}>Proceed to checkout</button>
            </div>
        </>
    );
};

export default Cart;
