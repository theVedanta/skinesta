import "../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";

function App({ Component, pageProps }) {
    const [authed, setAuthed] = useState("check");

    return (
        <GoogleOAuthProvider clientId="574213419539-qn8fjckd2a0f8g2spva04um81ocqs7j2.apps.googleusercontent.com">
            <Component {...pageProps} />
        </GoogleOAuthProvider>
    );
}

export default App;
