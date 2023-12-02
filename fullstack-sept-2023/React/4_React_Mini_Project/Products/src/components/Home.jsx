import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Categories from "./Categories";
import ProductList from "./ProductList";
import dataManipulation from "../utils/dataManipulation";
import PaginationContext, {usePaginationWrapper} from "../context/PaginationContext";

// custom hooks
// useMemo and useCallback

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [currCategory, setCurrCategory] = useState("All Categories");
  const [sortDir, setSortDir] = useState(0);

  // const [currPage, setCurrPage] = useState(1);
  // const [pageSize, setPageSize] = useState(4);
  const {currPage,setCurrPage,pageSize,setPageSize} = usePaginationWrapper();

  useEffect(() => {
    async function getProducts() {
      const rawData = await fetch("https://fakestoreapi.com/products/");
      const data = await rawData.json();
      console.log(data);
      setProducts(data);
    }
    getProducts();
  }, []);

  useEffect(() => {
    async function getCategories() {
      const rawData = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await rawData.json();
      console.log(data);
      setCategories(data);
    }
    getCategories();
  }, []);

  console.log("render");
  const { totalPages, paginatedProducts } = dataManipulation(
    products,
    search,
    currCategory,
    sortDir,
    pageSize,
    currPage
  );

  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sortWrapper">
          {/* input field */}
          <input
            className="search_input"
            value={search}
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrPage(1);
            }}
          />
          {/* sorting */}
          <div className="icons_container">
            <ArrowCircleUpIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={() => {
                setSortDir(-1);
                setCurrPage(1);
              }}
            ></ArrowCircleUpIcon>
            <ArrowCircleDownIcon
              fontSize="large"
              style={{ color: "white" }}
              onClick={() => {
                setSortDir(1);
                setCurrPage(1);
              }}
            ></ArrowCircleDownIcon>
          </div>
        </div>

        {/* categories */}
        <div className="categories_wrapper">
          <Categories
            categories={categories}
            setCurrCategory =  {setCurrCategory}
          ></Categories>
        </div>
      </header>
      <div className="product_wrapper">
        <ProductList
          products={products}
          paginatedProducts={paginatedProducts}
        ></ProductList>
      </div>
      {/* pagination */}
      <div className="pagination">
        <button
          onClick={() => {
            if (currPage === 1) return;
            setCurrPage(currPage - 1);
          }}
          disabled={currPage === 1 ? true : false}
        >
          <KeyboardArrowLeftIcon fontSize="large"></KeyboardArrowLeftIcon>
        </button>
        <div className="pagenum">{currPage}</div>
        <button
          onClick={() => {
            if (currPage === totalPages) return;
            setCurrPage(currPage + 1);
          }}
          disabled={currPage === totalPages ? true : false}
        >
          <ChevronRightIcon fontSize="large"></ChevronRightIcon>
        </button>
      </div>
    </>
  );
}

export default Home;
