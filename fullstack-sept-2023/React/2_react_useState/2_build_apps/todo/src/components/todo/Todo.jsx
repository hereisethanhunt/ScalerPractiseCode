import { useState } from "react"
import InputText from "./InputText";
import TodoData from "./TodoData";

// props only passed from parent to child
// react has a unidirectional flow
function Todo() {
  const [taskArr, setTaskArr] = useState([]);

  const addTask = (inputValue) =>{
    // let newTasks =  [...taskArr]
    // newTasks.push(inputValue)
    let newTasks = [inputValue, ...taskArr];
    setTaskArr(newTasks);
  }
  console.log("render parent");
  return (
    <>
        <InputText addTask={addTask}/>
        <TodoData taskArr={taskArr}/>
    </>
  )
}

export default Todo
// https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/