import { useAppSelector, useAppDispatch } from "@/app/appStore";

import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { setFilters } from "@/entities/news/model/newsSlice";
import NewsFilters from "../NewsFilters/NewsFilters";
import styles from "./styles.module.css";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news/ui";
import { Pagination } from "@/features/pagination";

const NewsByFilters = () => {
	const { filters } = useAppSelector((state) => state.news);
	const { news } = useAppSelector((state) => state.news);
	const dispatch = useAppDispatch();

	const debouncedKeyWords = useDebounce(filters.keywords, 1500);

	const { isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeyWords,
	});

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			dispatch(
				setFilters({ key: "page_number", value: filters.page_number + 1 }),
			);
		}
	};

	const handlePrevPage = () => {
		if (filters.page_number > 1) {
			dispatch(
				setFilters({ key: "page_number", value: filters.page_number - 1 }),
			);
		}
	};

	const handlePageClick = (pageNum: number) => {
		dispatch(setFilters({ key: "page_number", value: pageNum }));
	};

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} />

			<Pagination
				top={true}
				bottom={true}
				totalPages={TOTAL_PAGES}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
			>
				<NewsList isLoading={isLoading} news={news} />
			</Pagination>
		</section>
	);
};

export default NewsByFilters;
