import React,{useEffect} from "react";

function MyList({ handler, state }) {

    console.log(state);
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    useEffect(() => {
      console.log("Child Component redered");
    });
  
    return (
      <>
        {items.map((item, index) => {
          return (
            <div key={index} onClick={handler}>
              {item}
            </div>
          );
        })}
      </>
    );
  }
  
  export default React.memo(MyList);