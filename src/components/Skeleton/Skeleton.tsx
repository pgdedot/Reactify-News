import { useTheme } from "../../context/ThemeContext";
import type { DirectionType, SkeletonType } from "../../interfaces";
import styles from "./styles.module.css";

interface Props {
	count?: number;
	type?: SkeletonType;
	direction?: DirectionType;
}

const Skeleton = ({ count = 1, type = "banner", direction = "column" }: Props) => {
	const { isDark } = useTheme();

	const itemClass = `${type === "banner" ? styles.banner : styles.item} ${
		isDark ? (type === "banner" ? styles.banner_dark : styles.item_dark) : ""
	}`;

	return (
		<>
			{count > 1 ? (
				<ul className={direction === "column" ? styles.columnList : styles.rowList}>
					{[...Array(count)].map((_, index) => (
						<li key={index} className={itemClass}></li>
					))}
				</ul>
			) : (
				<li className={itemClass}></li>
			)}
		</>
	);
};
export default Skeleton;
