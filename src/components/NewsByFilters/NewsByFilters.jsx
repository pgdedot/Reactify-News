import { TOTAL_PAGES } from '../../constants/constants'
import NewsFilters from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import Pagination from '../Pagination/Pagination'
import styles from './styles.module.css'

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {
    // const {data: dataCategories} = useFetch(getCategories)


 
    const handleNextPage = () => {
        if(filters.page_number < TOTAL_PAGES){
            changeFilter('page_number', filters.page_number + 1);
        }
     }

    const handlePrevPage = () => {
        if(filters.page_number > 1){
            changeFilter('page_number', filters.page_number - 1);
        }
     }

    const handlePageClick = (pageNum) => {
        changeFilter('page_number', pageNum);
     }    


    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter}/>

            {/* {dataCategories ? (
            <Categories 
                categories={dataCategories.categories} 
                setSelectedCategories={(category) => changeFilter('category', category)} 
                selectedCategories={filters.category}
            />) : null}

            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/> */}


            <Pagination 
                totalPages={TOTAL_PAGES} 
                handleNextPage={handleNextPage} 
                handlePrevPage={handlePrevPage} 
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />

            <NewsList
                isLoading={isLoading} 
                news={news}
            />
            <Pagination 
                totalPages={TOTAL_PAGES} 
                handleNextPage={handleNextPage} 
                handlePrevPage={handlePrevPage} 
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />
        </section>
    )
}

export default NewsByFilters