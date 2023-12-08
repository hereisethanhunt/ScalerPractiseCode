import React from 'react'
import ProductList from '../components/ProductList';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
  const {cartQuantity, cartProducts} = useSelector((store) => store.cartState);

  return (
    <div>
         <ProductList
          paginatedProducts={cartProducts}
        ></ProductList>
    </div>
  )
}

export default Cart