import SearchBar from "components/SearchBar";
import styles from "@/styles/search.module.css";
import ProductCard from "components/ProductCard";
import { useRouter } from "next/router";
import BackBtn from "components/BackBtn";

const Search = () => {
	const router = useRouter();
	const { q: searchQuery } = router.query;

	return (
		<>
			<div className={styles.header}>
				<BackBtn />
				<SearchBar />
			</div>
			<h2 className={styles.searchTitle}>
				Products on <br /> {searchQuery}
			</h2>

			<div className={styles.tabs}>
				<button className={`${styles.tab} ${styles.active}`}>
					Best Seller
				</button>
				<button className={styles.tab}>Recommended</button>
				<button className={styles.tab}>Brand 1</button>
				<button className={styles.tab}>Brand 2</button>
				<button className={styles.tab}>Brand 3</button>
			</div>

			<div className={styles.contentContainer}>
				<ProductCard
					image={require("@/public/product1.webp")}
					name="Deep skin cleaner"
					brand="Aurora"
				/>
				<ProductCard
					image={require("@/public/product1.webp")}
					name="Deep skin cleaner"
					brand="Aurora"
				/>
				<ProductCard
					image={require("@/public/product1.webp")}
					name="Deep skin cleaner"
					brand="Aurora"
				/>
				<ProductCard
					image={require("@/public/product1.webp")}
					name="Deep skin cleaner"
					brand="Aurora"
				/>
			</div>
		</>
	);
};

export default Search;
