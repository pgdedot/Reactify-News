import { TOTAL_PAGES } from "@/shared/constants/constants";
import { NewsList } from "@/widgets/news/ui";
import { Pagination } from "@/features/pagination";
import type { IFilters } from "@/shared/interfaces";
import type { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({filters, news, isLoading}: Props) => {
  const {handleNextPage, handlePageClick, handlePrevPage} = usePaginationNews(filters)

  return (
      <Pagination
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      >
        <NewsList
          direction="column"
          type="item"
          isLoading={isLoading}
          news={news}
        />
      </Pagination>
  );
};

export default NewsListWithPagination;
