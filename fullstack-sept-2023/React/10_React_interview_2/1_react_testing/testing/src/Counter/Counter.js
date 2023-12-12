import React, { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count+1);
  }
  let decrement = () => {
    setCount(count-1);
  }
  return (
    <div className='container'>
        <button onClick={increment}>+</button> 
        <p>Count {count}</p>
        <button onClick={decrement}>-</button>
        <div>Hello</div>
    </div>
  )
}

export default Counter