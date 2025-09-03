import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton (Component, type, count) {
    return function WithSkeleton(props) {
        const {isLoading, ...restPops} = props;

        if(isLoading || restPops.item === null || (Array.isArray(restPops.news) && restPops.news.length === 0)) {
            return <Skeleton type={type} count={count}/>
        }

        return <Component {...restPops}/>
    }
}

export default withSkeleton;