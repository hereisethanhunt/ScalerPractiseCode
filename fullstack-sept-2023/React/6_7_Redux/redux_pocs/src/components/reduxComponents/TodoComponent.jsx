import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import todoSlice from '../../redux/TodoSlice';

const action = todoSlice.actions;
function TodoComponent() {

 const dispatch = useDispatch();
 const [inputValue,setInputValue] = useState("");
 const todoArr = useSelector((store) => store.todoState.todoArr);

  const updateInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddTask = () => {
    dispatch(action.addTask(inputValue));
    setInputValue('');
  }

  return (
    <>
     <div style={{display: 'flex'}}>
        <input type="text" value={inputValue} onChange={updateInput}/>
        <button onClick={handleAddTask}>Add</button>
     </div>
     <div>
     <ul>
         {
          todoArr.map((eachTask, index) => {
            return <li key={index}>{eachTask}</li>
          })
         }
        </ul>
     </div>
    </>
  )
}

export default TodoComponent