import { useTheme } from "@/app/providers/ThemeProvider";
import { themeIcons } from "@/shared/assets";
import styles from "./styles.module.css";

const ThemeButton = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<img
			className={styles.switcher}
			src={isDark ? themeIcons.light : themeIcons.dark}
			width={40}
			alt="theme"
			onClick={toggleTheme}
		/>
	);
};

export default ThemeButton;
