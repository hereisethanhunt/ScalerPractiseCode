import React from 'react'
import PaginationContext, {usePaginationWrapper} from "../context/PaginationContext";

function Categories(props) {
    const {categories, setCurrCategory} = props;
    const {setCurrPage} = usePaginationWrapper();

  return (
    <>
    <button className="category_option" onClick={ () => {
        setCurrCategory("All Categories");
        setCurrPage(1);
    } }>All categories</button>
    {
      !!categories.length && categories.map((eachCate, index)=>{
        return <button key={index} onClick={ () => {
            setCurrCategory(eachCate);
            setCurrPage(1);
        } } className="category_option">{eachCate}</button>
      })
    }
    </>
  )
}
export default Categories