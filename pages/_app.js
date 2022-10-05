import "../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
    const [authed, setAuthed] = useState("check");
    const [user, setUser] = useState({});

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

    return (
        <GoogleOAuthProvider clientId="574213419539-qn8fjckd2a0f8g2spva04um81ocqs7j2.apps.googleusercontent.com">
            <Component
                authed={authed}
                setAuthed={setAuthed}
                setUser={setUser}
                user={user}
                {...pageProps}
                // key={router.route}
            />
        </GoogleOAuthProvider>
    );
}

export default App;
