import React, { useContext, useReducer } from 'react'

const CartContext = React.createContext()

const initialState = {
  items: [],
  total: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      }
    case 'REMOVE_ITEM':
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      )
      return {
        ...state,
        items: updatedItems,
        total: state.total - action.payload.price,
      }
    case 'CLEAR_CART':
      return initialState
    default:
      return state
  }
}

function CartProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }
  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, clearCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

function UseReducerWithContext() {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Cart Example</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  )
}

function ProductList() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]

  const { addItem } = useContext(CartContext)

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

function Cart() {
  const { state, removeItem, clearCart } = useContext(CartContext)

  return (
    <div>
      <h2>Cart</h2>
      {state.items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
      <p>Total: {state.total}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default UseReducerWithContext