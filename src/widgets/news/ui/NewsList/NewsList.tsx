import { NewsCard, type INews } from "@/entities/news";
import withSkeleton from "@/shared/HOC/withSkeleton";
import styles from "./styles.module.css";
import type { DirectionType, SkeletonType } from "@/shared/interfaces";

interface Props {
	news?: INews[];
	type?: SkeletonType;
	direction?: DirectionType;
}

const NewsList = ({ news, type = "item" }: Props) => {
	if (!news) return null;

	return (
		<ul className={`${type === 'item' ? styles.items : styles.banners}`}>
			{news?.map((item) => {
				return <NewsCard key={item.id} item={item} type={type} />;
			})}
		</ul>
	);
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
