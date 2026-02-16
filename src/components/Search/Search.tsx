import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

interface Props {
	keywords?: string;
	setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
	const { isDark } = useTheme();

	return (
		<div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
			<input
				type="text"
				value={keywords}
				placeholder="JavaScript"
				onChange={(e) => setKeywords(e.target.value)}
				className={styles.input}
			/>
		</div>
	);
};

export default Search;
