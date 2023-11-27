import { useState } from "react"

// props shouldnt be changed
// maintain state as immutable
// props are passed from parent to child
// if u want to update from child to parent, pass callback function as props.
// state re-renders the component and its children by default

function TodoData(props) {
  console.log("data render")

  const {taskArr} = props;

  return (
    <div>
        <ul>
         {
          taskArr.map((eachTask, index) => {
            return <li key={index}>{eachTask}</li>
          })
         }
        </ul>
      </div>
  )
}

export default TodoData