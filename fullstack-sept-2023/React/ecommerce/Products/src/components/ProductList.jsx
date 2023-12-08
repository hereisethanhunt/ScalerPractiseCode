import React from 'react'

import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useSelector, useDispatch } from 'react-redux';
import cartSlice from '../redux/slices/CartSlice';
const action = cartSlice.actions;


function ProductList(props) {
  const {cartProducts} = useSelector((store) => store.cartState);
  const dispatch = useDispatch();


    const { paginatedProducts} = props
    const handleAddProduct = (product) => {
      dispatch(action.addToCart(product))
    }

  const handleDeleteProduct = (product) => {
    dispatch(action.removeFromCart(product));
  }

  return (
    <>
    {paginatedProducts === null ? (
        <div>Loading......</div>
      ) : (
        paginatedProducts.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt="" className="product_image" />
              <div className="product_meta">
                <p className="product_title">{product.title}</p>
                <p className="Price">$ {product.price}</p>
              </div>
              <div className="add_to_cart_container">
                  <AddBoxIcon
                      onClick={() => { handleAddProduct(product) }}
                  ></AddBoxIcon>
                  <div className="currentCartCount">
                    {<PrintCount id={product.id} cartProducts={cartProducts}></PrintCount>}
                  </div>
                  <IndeterminateCheckBoxIcon
                      onClick={() => { handleDeleteProduct(product) }}
                  >
                  </IndeterminateCheckBoxIcon>
              </div>
            </div>
          );
        })
      )}
      </>
  )
}

function PrintCount(props) {
  
  let totalItemsForEachPro = 0;
  const {id, cartProducts} = props;
  for(let i=0; i< cartProducts.length;i++) {
    if(cartProducts[i].id === id) {
      totalItemsForEachPro =  cartProducts[i].numOfQuantity
    }
  }

  return (<>
      {totalItemsForEachPro}
  </>)

}

export default ProductList