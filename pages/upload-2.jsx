import styles from "@/styles/auth.module.css";
import scheduleStyles from "@/styles/schedule.module.css";
import BASE_API_URL from "constants";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductItem = ({ name, price, image }) => {
	return (
		<div className={styles.productItem}>
			<div className={styles.productImgBox}>
				<img className={styles.prodImg} src={image} />
			</div>
			<div className={styles.productContent}>
				<h3 className={styles.productName}>{name}</h3>
				<h3 className={styles.productPrice}>{price}</h3>
				<button className={styles.btn}>Buy Now</button>
			</div>
		</div>
	);
};

const Upload2 = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const productsJson = await fetch(`${BASE_API_URL}/shop`);
			const prods = await productsJson.json();

			setProducts(prods);
		};

		getProducts();
	}, []);

	return (
		<>
			<div className={styles.container}>
				<Image
					src="/auth-bg.png"
					layout="fill"
					style={{ zIndex: "-1" }}
					alt="img"
				/>
				<div
					className={styles.logo}
					style={{ marginTop: "2rem", marginBottom: "0rem" }}
				>
					<Image src={require("../public/logo@2x.png")} alt="img" />
				</div>

				<div className={`${styles.scheduleAndShopCard} ${styles.card}`}>
					<h3 className={styles.title}>
						According to your skin type
					</h3>

					<ul
						className={`${scheduleStyles.scheduleContainer}`}
						style={{ paddingTop: "2rem", paddingBottom: "0" }}
					>
						<li className={styles.scheduleContainerItem}>
							<p className={scheduleStyles.scheduleDay}>Today</p>
							<ul className={scheduleStyles.scheduleItems}>
								<li>
									<span>
										<h3
											className={
												scheduleStyles.scheduleName
											}
										>
											Exfoliate with acne control
										</h3>
										<p
											className={
												scheduleStyles.scheduleDate
											}
										>
											Today - 9:00 PM
										</p>
									</span>
								</li>
							</ul>
						</li>
					</ul>

					<h3 className={styles.secTitle}>Products</h3>
					<div className={styles.contentContainer}>
						{products.map((prod, i) => (
							<ProductItem
								key={i}
								image={prod.img}
								name={prod.name}
								price={`$${prod.price}`}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Upload2;
