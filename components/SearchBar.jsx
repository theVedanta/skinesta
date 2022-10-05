import styles from "@/styles/shop.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { Search } from "react-feather";

const SearchBar = () => {
	const [input, setInput] = useState("");
	const router = useRouter();
	const navigateToSearch = (e) => {
		e.preventDefault();
		router.push({ pathname: `/shop/search`, query: { q: input } });
	};

	return (
		<>
			<form className={styles.searchBar} onSubmit={navigateToSearch}>
				<Search
					className={styles.searchIcon}
					color="#444"
					onClick={navigateToSearch}
				/>
				<input
					placeholder="Search any product..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className={styles.searchInput}
				/>
			</form>
		</>
	);
};

export default SearchBar;
