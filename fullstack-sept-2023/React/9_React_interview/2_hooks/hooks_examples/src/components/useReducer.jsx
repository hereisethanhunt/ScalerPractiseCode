import React, { useReducer } from 'react';
/***
 * useReducer 
 * * have all the state management logic of a component at one place using reducer
 * * there no quirk of prev state 
 * * you get only one dispatch function to make all the state mutation
 * */ 
// deal with complex state variables 

const initialState = 0;
const reducer = (state,action) => {
    switch(action) {
        case "increment" : 
            return state+1;
        case "decrement" :
            return state-1;
        case "increaseBy5" :
            return state+5;
        case "decreaseBy5" :
            return state-5;
        default:
            return state;
    }
}
function CounterUseReducer() {
    const [count, dispatch] = useReducer(reducer,initialState)
    return (
        <>
        <div>{count}</div>
        <button onClick={() => { dispatch("increment") }}>Increment</button>
        <button onClick={() => { dispatch("decrement") }}>Decrement</button>
        <button onClick={() => { dispatch("increaseBy5") }}>increase by 5</button>
        <button onClick={() => { dispatch("decreaseBy5") }}>decreaseBy5</button>

        </>
    )
}

export default CounterUseReducer;