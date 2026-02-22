import React, { useRef, type ReactElement, type ReactNode } from "react";
import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeProvider";

interface Props {
	children: ReactElement | ReactNode;
	step?: number;
}

const Slider = ({ children, step = 150}: Props) => {
	const {isDark} = useTheme();
	
	const sliderRef = useRef<HTMLElement | null>(null);

	const scrollLeft = () => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft -= step;
	};

	const scrollRight = () => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft += step;
	};

	return (
		<div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
			<button onClick={scrollLeft} className={styles.arrow}>
				&lt;
			</button>
			{React.isValidElement(children)
				? React.cloneElement(children, { ref: sliderRef })
				: null}
			<button onClick={scrollRight} className={styles.arrow}>
				&gt;
			</button>
		</div>
	);
};

export default Slider;
