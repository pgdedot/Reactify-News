import type { ReactNode } from "react"
import Pagination from "../Pagination/Pagination"
import type { IPaginationProps } from "../../interfaces"

interface Props {
    children: ReactNode,
    top?: boolean,
    bottom?: boolean
}

const PaginationWrapper = ({top, bottom, children, ...paginationProps}: Props & IPaginationProps) => {
    return (
        <>
            {top && <Pagination {...paginationProps}/>}
            {children}
            {bottom && <Pagination {...paginationProps}/>}
        </>
    )
}

export default PaginationWrapper