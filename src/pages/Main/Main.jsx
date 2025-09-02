import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews(currentPage, pageSize);
            console.log(response)
            setNews(response.news)
            setIsLoading(false);
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage])

    const handleNextPage = () => {
        if(currentPage < totalPage){
            setCurrentPage(prev => prev + 1)
        }
     }

    const handlePrevPage = () => {
        if(currentPage > 1){
            setCurrentPage(prev => prev - 1)
        }
     }

    const handlePageClick = (pageNum) => {
        setCurrentPage(pageNum)
     }


    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]}/>
            ) : (
                <Skeleton type='banner' count={1}/>
            )}

            <Pagination 
                totalPages={totalPage} 
                handleNextPage={handleNextPage} 
                handlePrevPage={handlePrevPage} 
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />

            {!isLoading ? (
                <NewsList news={news}/>
            ) : 
            (
                <Skeleton type='item' count={10}/>
            )}

            <Pagination 
                totalPages={totalPage} 
                handleNextPage={handleNextPage} 
                handlePrevPage={handlePrevPage} 
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />
        </main>
    )
}

export default Main;