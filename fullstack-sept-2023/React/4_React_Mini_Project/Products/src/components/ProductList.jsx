import React from 'react'

function ProductList(props) {
    const {products, paginatedProducts} = props
  return (
    <>
    {products === null ? (
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
            </div>
          );
        })
      )}
      </>
  )
}

export default ProductList