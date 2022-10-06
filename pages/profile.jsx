import styles from "@/styles/profile.module.css";
import Container from "components/Container";
import Image from "next/image";
import Link from "next/link";
import {
	ShoppingBag,
	LogOut,
	Heart,
	ShoppingCart,
	Bell,
	CreditCard,
	HelpCircle,
	User,
} from "react-feather";

const profile = () => {
	return (
		<>
			<Container>
				<div className={styles.profileBox}>
					<div className={styles.profileImg}>
						<Image
							src="/user_face.jpg"
							width="80"
							height="80"
							style={{ borderRadius: "50%" }}
						/>
					</div>
					<div className={styles.profileContentBox}>
						<h3 className={styles.profileName}>User Name</h3>
						<h3 className={styles.profileEmail}>user@mail.com</h3>
					</div>
				</div>

				<ul className={styles.list}>
					<li>
						<User className={styles.icon} />
						<Link href="/profile/editProfile">
							<a>Edit Profile</a>
						</Link>
					</li>
					<li>
						<ShoppingBag className={styles.icon} />
						<Link href="/shop/orders">
							<a>Orders</a>
						</Link>
					</li>
					<li>
						<ShoppingCart className={styles.icon} />
						<Link href="/shop/cart">
							<a>Cart</a>
						</Link>
					</li>
					<li>
						<Heart className={styles.icon} />
						<Link href="/shop/orders">
							<a>Favourites</a>
						</Link>
					</li>
					<li>
						<CreditCard className={styles.icon} />
						<Link href="/shop/orders">
							<a>Payment Methods</a>
						</Link>
					</li>
					<li>
						<Bell className={styles.icon} />
						<Link href="/shop/orders">
							<a>Notifications</a>
						</Link>
					</li>
					<li>
						<HelpCircle className={styles.icon} />
						<Link href="/shop/orders">
							<a>Help</a>
						</Link>
					</li>
				</ul>

				<Link href="/logout">
					<a className={styles.logoutBtn}>
						<LogOut
							className={styles.logoutBtnIcon}
							color="#5ec396"
						/>
						<p>Log Out</p>
					</a>
				</Link>
			</Container>
		</>
	);
};

export default profile;
