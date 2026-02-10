import withSkeleton from "../../helpers/HOC/withSkeleton";
import type { INews } from "../../interfaces";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

interface Props {
	news?: INews[];
}

const NewsList = ({ news }: Props) => {
	if (!news) return null;

	return (
		<ul className={styles.list}>
			{news?.map((item) => {
				return <NewsItem key={item.id} item={item} />;
			})}
		</ul>
	);
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
