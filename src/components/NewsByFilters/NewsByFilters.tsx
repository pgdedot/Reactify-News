import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
	const { filters } = useAppSelector((state) => state.news);
	const {news} = useAppSelector((state) => state.news)
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

			<PaginationWrapper
				top={true}
				bottom={true}
				totalPages={TOTAL_PAGES}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
			>
				<NewsList isLoading={isLoading} news={news} />
			</PaginationWrapper>
		</section>
	);
};

export default NewsByFilters;
