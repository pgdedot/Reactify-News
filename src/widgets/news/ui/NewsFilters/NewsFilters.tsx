import { useAppDispatch } from "@/app/appStore";
import Categories from "@/features/categories/ui/Categories/Categories";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import type { IFilters } from "@/shared/interfaces";
import type { CategoriesType } from "@/entities/category";

interface Props {
	filters?: IFilters;
	categories: CategoriesType[];
}

const NewsFilters = ({ filters, categories }: Props) => {

	const dispatch = useAppDispatch();

	return (
		<div className={styles.filters}>
			<Slider>
				{categories ? (
					<Categories
						categories={categories}
						setSelectedCategories={(category) =>
							dispatch(setFilters({ key: "category", value: category }))
						}
						selectedCategories={filters?.category}
					/>
				) : null}
			</Slider>

			<Search
				keywords={filters?.keywords}
				setKeywords={(keywords) =>
					dispatch(setFilters({ key: "keywords", value: keywords }))
				}
			/>
		</div>
	);
};

export default NewsFilters;
