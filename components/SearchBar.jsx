import styles from "@/styles/shop.module.css";
import { Search } from "react-feather";

const SearchBar = () => {
	return (
		<>
			<div className={styles.searchBar}>
				<Search className={styles.searchIcon} color="#444" />
				<input
					placeholder="Search any product..."
					className={styles.searchInput}
				/>
			</div>
		</>
	);
};

export default SearchBar;
