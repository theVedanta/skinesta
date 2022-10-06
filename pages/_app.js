import "../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";
import BASE_API_URL from "../constants";

function App({ Component, pageProps }) {
    const [authed, setAuthed] = useState("check");
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                if (localStorage.getItem("authToken")) {
                    const userJson = await fetch(
                        `${BASE_API_URL}/auth?authToken=${localStorage.getItem(
                            "authToken"
                        )}`
                    );
                    const user = await userJson.json();

                    if (user.user) {
                        setAuthed(true);
                        setUser(user.user);
                        setCart(user.user.cart);
                    } else if (user.expired) {
                        setAuthed(false);
                        localStorage.removeItem("authToken");
                    } else {
                        setAuthed(false);
                        localStorage.removeItem("authToken");
                    }
                } else {
                    setAuthed(false);
                    localStorage.removeItem("authToken");
                }
            } catch (err) {
                setAuthed(false);
                localStorage.removeItem("authToken");
            }
        };

        getUser();
    }, []);

    useEffect(() => {
        const editCart = async () => {
            const editedJson = await fetch(
                `${BASE_API_URL}/shop/cart?id=${user && user._id && user._id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ cart }),
                }
            );
            const edited = await editedJson.json();

            if (!edited.done) {
                setCart(cart.splice(-1));
            }
        };

        user && user._id && cart && cart.length !== 0 && editCart();
    }, [cart, user]);

    return (
        <GoogleOAuthProvider clientId="574213419539-qn8fjckd2a0f8g2spva04um81ocqs7j2.apps.googleusercontent.com">
            <Component
                authed={authed}
                setAuthed={setAuthed}
                setUser={setUser}
                user={user}
                cart={cart}
                setCart={setCart}
                {...pageProps}
                // key={router.route}
            />
        </GoogleOAuthProvider>
    );
}

export default App;
