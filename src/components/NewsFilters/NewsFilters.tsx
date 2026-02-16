import { type IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface Props {
	filters?: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
	const { data: dataCategories } = useGetCategoriesQuery(null);

	const dispatch = useAppDispatch();

	return (
		<div className={styles.filters}>
			<Slider>
				{dataCategories ? (
					<Categories
						categories={dataCategories.categories}
						setSelectedCategories={(category) =>
							dispatch(setFilters({key: "category", value: category}))
						}
						selectedCategories={filters?.category}
					/>
				) : null}
			</Slider>

			<Search
				keywords={filters?.keywords}
				setKeywords={(keywords) => dispatch(setFilters({key: "keywords", value: keywords}))}
			/>
		</div>
	);
};

export default NewsFilters;
