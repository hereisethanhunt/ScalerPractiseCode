import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(0);
    const [count1, setCount1] = React.useState(0);

    // batching of states --> if it batches a lot of changes together, 
    // then rerendering reduces
    const handleCount = () => {
    //     setCount(count+1); // initial count 0, next count 1
    //     setCount(count+1); // initla count 0, next count 1
    // rerendering
    //    // count = 1


    setCount((count) => count+1);  // initial count 0, next count 1
    setCount((count) => count+1); // intial 1 ,next count 2
        // re-rendering
        // count = 2

    }

    console.log('render')

    return (
        <>
            <h3>{count}</h3>
            <button onClick={()=>{handleCount()}}>
                Increment
            </button>
        </>
    )
}

export default Counter