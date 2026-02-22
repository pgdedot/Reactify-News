import { useAppDispatch } from "@/app/appStore";
import Categories from "@/features/categories/ui/Categories/Categories";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import type { IFilters } from "@/shared/interfaces";

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
