import { useState } from "react"

// props are immutable
function InputText(props) {

    const {addTask} = props;
    const [inputValue,setInputValue] = useState("");

    const updateInput = (e) => {
        setInputValue(e.target.value);
      }

      const handleAddTask = () => {
        addTask(inputValue);
        // setInputValue("");
      }

      console.log("input render")
      
  return (
    <>
     <input type="text" value={inputValue} onChange={updateInput}/>
     
      <button onClick={handleAddTask}>Add</button>
    </>
  )
}

export default InputText