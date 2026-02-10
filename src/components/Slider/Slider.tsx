import React, { useRef, type ReactElement } from "react";
import styles from "./styles.module.css";

interface Props {
	children: ReactElement;
	step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
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
		<div className={styles.slider}>
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
