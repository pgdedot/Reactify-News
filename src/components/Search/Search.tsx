import styles from './styles.module.css'

interface Props {
    keywords?: string;
    setKeywords: (keywords: string) => void
}

const Search = ({keywords, setKeywords}: Props) => {
    return (
        <div className={styles.search}>
            <input type="text" 
                value={keywords} 
                placeholder="JavaScript" 
                onChange={(e) => setKeywords(e.target.value)} 
                className={styles.input}
            />
        </div>

    )
}

export default Search