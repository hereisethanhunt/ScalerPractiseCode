/**
 * 1. peformances in react code
 *      a.)  UseMemo : is used to prevent repetiton of time taking calculation
 *      b.) useCallback: 
 * **/

import { useState, useMemo } from 'react';

export function UseMemoConcept() {
  const [number, setNumber] = useState(1); // input
  const [inc, setInc] = useState(0);
  const onClick = () => setInc(i => i + 1);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  // const factorial = factorialOf(number);
  console.log(inc);
  
  return (
    <div>
      Factorial of 
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default UseMemoConcept;