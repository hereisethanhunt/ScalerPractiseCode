import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import counterSlice from '../../redux/CounterSlice';

const action = counterSlice.actions;
function CounterRedux() {

  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counterState.count);

  const handleIncrement = () => {
      // dispatching an action
      dispatch(action.increment("asif"));
      console.log("increase")
  }
  const handleDecrement = () => {
    // dispatching an action
    dispatch(action.decrement("vishal"));
    console.log("decrease")
  }

  return (
     <>
            <button onClick={handleIncrement}>+</button>
            <h3>{counter}</h3>
            <button onClick={handleDecrement}>-</button>
        </>
  )
}

export default CounterRedux