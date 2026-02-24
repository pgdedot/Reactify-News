import { useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import { NewsFilters } from "@/widgets/news/ui";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";

const NewsByFilters = () => {
  const { filters } = useAppSelector((state) => state.news);
  const { news } = useAppSelector((state) => state.news);

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyWords,
  });

  const { data: dataCategories } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters
        categories={dataCategories?.categories || []}
        filters={filters}
      />
      <NewsListWithPagination
        news={news}
        isLoading={isLoading}
        filters={filters}
      />
    </section>
  );
};

export default NewsByFilters;
