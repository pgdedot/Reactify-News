import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import Image from '../Image/Image'
import styles from './styles.module.css'

const NewsBanner = ({item}) => {
    if (!item) return null; 

    const noneImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGL-nM5H8eZfM19UQbIgDn0XwOUj1ByAyV4Q&s'

    return (
        <div className={styles.banner}>
            <Image image={item.image === "None" ? noneImage : item.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    )
}


export default NewsBanner