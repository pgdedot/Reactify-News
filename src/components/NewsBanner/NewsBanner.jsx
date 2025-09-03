import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import withSkeleton from '../../helpers/HOC/withSkeleton'
import Image from '../Image/Image'
import styles from './styles.module.css'

const NewsBanner = ({item}) => {
    if (!item) return null; 

    return (
        <div className={styles.banner}>
            <Image image={item.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    )
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)

export default NewsBannerWithSkeleton