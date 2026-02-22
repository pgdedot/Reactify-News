import { forwardRef, type ForwardedRef } from 'react'
import styles from './styles.module.css'
import type { CategoriesType } from '@/entities/category'


interface Props {
    categories: CategoriesType[],
    setSelectedCategories: (category: CategoriesType | null) => void,
    selectedCategories?: CategoriesType | null
}

const Categories = forwardRef(({categories, setSelectedCategories, selectedCategories}: Props, ref: ForwardedRef<HTMLDivElement>) => {
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