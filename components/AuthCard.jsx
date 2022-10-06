import Image from "next/image";
import styles from "@/styles/auth.module.css";
import { Phone } from "react-feather";

const AuthCard = ({ image, title }) => {
	return (
		<>
			<div className={styles.card}>
				<div className={styles.cardImgBox}>
					<Image
						src={image}
						width="100px"
						height="100px"
						className={styles.cardImg}
					/>
				</div>
				<h2 className={styles.cardTitle}>{title}</h2>

				<ul className={styles.list}>
					<li>
						<Phone className={styles.icon} />
						<p>Talk to our experts</p>
					</li>
					<li>
						<Phone className={styles.icon} />
						<p>Talk to our experts</p>
					</li>
					<li>
						<Phone className={styles.icon} />
						<p>Talk to our experts</p>
					</li>
					<li>
						<Phone className={styles.icon} />
						<p>Talk to our experts</p>
					</li>
				</ul>
			</div>
		</>
	);
};

export default AuthCard;
