import React from "react";

import { useState, useCallback } from "react";
import MyList from "./MyList";

function UseCallbackConcept() {
  // rerendering
  // everything gets reassigned
  // in the case of a function which is returning some calculation
  // or returning some value --> if u use useMemo,
  //  then that reassigned wont happen on re-render

  // in the case of a normal function, if we use useCallback, then
  // the reassignment during re-rendering wont happen for that function.

    const [state, setState] = useState(false);
    const [dep] = useState(false);
    console.log("Parent Component redered");
  
    const handler = useCallback(
      (event) => {
        console.log("You clicked ", event.currentTarget);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dep],
    );
    // const handler = (event) => { console.log("You clicked ", event.currentTarget);}

    const statehanddler = () => {
      setState(!state);
    };

    return (
      <>
        <button onClick={statehanddler}>Change State Of Parent Component</button>
        <MyList handler={handler} />
      </>
    );
}

export default UseCallbackConcept;