import withSkeleton from '../../helpers/HOC/withSkeleton'
import NewsItem from '../NewsItem/NewsItem'
import styles from './styles.module.css'

const NewsList = ({ news }) => {
    if(!news) return null;

    return (
        <ul className={styles.list}>
            {news.map(item => {
                return <NewsItem key={item.id} item={item}/>
            })}
        </ul>
    )
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton