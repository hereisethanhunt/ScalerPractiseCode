import React, {useState, useContext} from 'react'

const PaginationWrapperContext = React.createContext();

function PaginationContext({children}) {

    const [currPage, setCurrPage] = useState(1);
    const [pageSize, setPageSize] = useState(4);

    const contextData = {
        currPage,
        setCurrPage,
        pageSize,
        setPageSize
    }
  return (
    <PaginationWrapperContext.Provider value = {contextData}>
        {children}
    </PaginationWrapperContext.Provider>
  )
}
export default PaginationContext

export const usePaginationWrapper = () => {
    return useContext(PaginationWrapperContext)
}