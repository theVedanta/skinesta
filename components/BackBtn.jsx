import { useRouter } from "next/router";
import { ArrowLeft } from "react-feather";

const BackBtn = () => {
	const router = useRouter();
	return (
		<button className="backBtn" onClick={() => router.back()}>
			<ArrowLeft />
		</button>
	);
};

export default BackBtn;
