import { GoogleLogin } from "@react-oauth/google";
import BASE_API_URL from "../constants";
import { decode } from "jsonwebtoken";

const Google = ({ setAuthed, setUser }) => {
	const onSuccess = async (res) => {
		const { email, picture, name } = decode(res.credential);

		const authedJson = await fetch(`${BASE_API_URL}/auth/google`, {
			method: "POST",
			body: JSON.stringify({
				email,
				pfp: picture,
				name,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		const authed = await authedJson.json();
		console.log(authed);
		if (authed.user) {
			setUser(authed.user);
			setAuthed(true);
			localStorage.setItem("authToken", authed.user.authToken);

			// window.location.href = "/upload";
		} else {
			setAuthed(false);
			localStorage.removeItem("authToken");
		}
	};
	const onError = (error) => {
		console.log("error", error);
		setAuthed(false);
		localStorage.removeItem("authToken");
	};

	return (
		<div className="google-btn">
			<GoogleLogin
				theme="outline"
				text="continue_with"
				shape="pill"
				logo_alignment="center"
				onSuccess={onSuccess}
				onError={onError}
				useOneTap={true}
				size="large"
				width="280"
			/>
		</div>
	);
};

export default Google;
