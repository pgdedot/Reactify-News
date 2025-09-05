import { forwardRef } from 'react'
import styles from './styles.module.css'

const Categories = forwardRef(({categories, setSelectedCategories, selectedCategories}, ref) => {
    return (
        <div className={styles.categories} ref={ref}>
            <button 
                onClick={() => setSelectedCategories(null)} 
                className={!selectedCategories ? styles.active : styles.item} 
            >
                all
            </button>            
            {categories.map(category => (
                <button 
                    onClick={() => setSelectedCategories(category)} 
                    className={selectedCategories === category ? styles.active : styles.item} 
                    key={category}
                >
                    {category}
                </button>
            ))}
        </div>
    )
})

Categories.displayName = 'Categories'

export default Categories