import React from "react";
import { useEffect, useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCategory] = useState("All Categories");

  // 0 for unsorted, 1 for ascending, -1 for descending
  const [sortDir, setSortDir] = useState(0);

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
      const rawData = await fetch("https://fakestoreapi.com/products/categories");
      const data = await rawData.json();
      console.log(data);
      setCategories(data);
    }
    getCategories();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const sortProductLists = (direction) => {
    setSortDir(direction);
  }

  console.log("render");
  let searchedProducts = products;
  if (search !== "") {
    searchedProducts = products.filter((eachProduct) => {
      console.log(search);
      const userSearch = search.toLowerCase();
      const productTitles = eachProduct.title.toLowerCase();
      return productTitles.includes(userSearch);
    });
  }

  // currCat , 
  // list of products.
  let groupedCategory = searchedProducts
  if(currCategory !== "All Categories") {
    groupedCategory = searchedProducts.filter((eachPr)=>{
      return currCategory === eachPr.category
    })
  }


  let sortedSearchedProducts = groupedCategory;
  if(sortDir !== 0) {
    if(sortDir === 1)
      sortedSearchedProducts.sort(ascendingCom);
    else
      sortedSearchedProducts.sort(decesdingCom);
  }




  function ascendingCom(product1,product2) {
    if(product1.price < product2.price)
      return 1
    else
      return -1
  }

  function decesdingCom(product1,product2) {
    if(product1.price > product2.price)
      return 1
    else
      return -1
  }


  const selectCategories = (cat) => {
    setCurrCategory(cat);
  }


  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sortWrapper">
          {/* input field */}
          <input
            className="search_input"
            value={search}
            type="text"
            onChange={handleChange}
          />
          {/* sorting */}
          <div className="icons_container">
            <ArrowCircleUpIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={ () => sortProductLists(-1) }
            ></ArrowCircleUpIcon>
            <ArrowCircleDownIcon
              fontSize="large"
              style={{ color: "white" }}
              onClick={ () => sortProductLists(1) }
            ></ArrowCircleDownIcon>
          </div>
        </div>

        {/* categories */}
        <div className="categories_wrapper">
          <button className="category_option" onClick={ () => selectCategories("All Categories") }>All categories</button>
          {
            !!categories.length && categories.map((eachCate, index)=>{
              return <button key={index} onClick={ () => selectCategories(eachCate) } className="category_option">{eachCate}</button>
            })
          }
        </div>

      </header>
      <div className="product_wrapper">
        {products === null ? (
          <div>Loading......</div>
        ) : (
          sortedSearchedProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <img src={product.image} alt="" className="product_image" />
                <div className="product_meta">
                  <p className="product_title">{product.title}</p>
                  <p className="Price">$ {product.price}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Home;
