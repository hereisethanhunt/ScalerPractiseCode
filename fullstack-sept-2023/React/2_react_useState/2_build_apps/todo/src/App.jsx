import { useState } from "react"


function App() {

  
  const [inputValue,setInputValue] = useState("");
  // const [taskArr, setTaskArr] = useState([]);

  const updateInput = (e) => {
    setInputValue(e.target.value);
  }
  const addTask = () =>{

  }
  return (
    <>
      <input type="text" value={inputValue} onChange={updateInput}/>

      <button onClick={addTask}>Add</button>
      <div>
        <ul>
         {/* {
          taskArr.map((eachTask) => {
             <li>{eachTask}</li>
          })
         } */}
        </ul>
      </div>
    </>
  )
}

export default App
