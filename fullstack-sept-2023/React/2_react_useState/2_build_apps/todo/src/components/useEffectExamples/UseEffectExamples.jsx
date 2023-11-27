import { useEffect, useState } from 'react';

function UseEffectExamples() {
    const [value, setValue] = useState("");
    const [taskList, setTaskList] = useState([]);
    // [{id,task},{id,task},{id,task},{id,task}]

    const setTask = function () {
        let newTaskList = [...taskList];
       // newTaskList.push(value);
        newTaskList.push({
            id: Date.now(),
            task: value
        })
        setTaskList(newTaskList);
        setValue("");
    }

    const removeTask = function (id) {

        console.log(taskList);

        let restOftasks = taskList.filter(function (taskObject) {
            return taskObject.id != id;
        })
        console.log(restOftasks);
        setTaskList(restOftasks);
    }

    const updateInput = (e) => {
        setValue(e.target.value);
      }


    // this useeffect is called only once after the first render
    // useEffect(()=>{
    //     console.log("useeffect empty arrray")
    // },[]);

    // this useeffect is called everytime after each rendering
    // useEffect(()=>{
    //     console.log("useffect without second param")
    // });

    // pass function as useEffect dependency array ??
    function hello(){
        setValue("")
        console.log("hello")
    }
    // this useeffect is called after first render and after the change of state of the dependent array
    useEffect(()=>{
        hello();
        console.log("useeffect with dependency array")
    },[]);

    // remaining is talking about return inside useEffect - used for cleanup
    // extension of react to check state and props.
    // usecases of each useEffects
    // routing

    console.log("render")

    return (
        <>
            <div>
                {/* input */}
                <input type="text" placeholder="Input Task" value={value}
                    onChange={updateInput}></input>
                <button onClick={setTask}>Add Task </button>
            </div>

            {/* list  */}
            {taskList.map((taskObj) => {
                return (
                    <Task key={taskObj.id} id={taskObj.id} task={taskObj.task}
                        removeTask={removeTask}></Task>
                    // <li key={taskObj.id}>{taskObj.task}</li>
                        )
            })}
        </> 
    )
}
function Task(props) {
    // eslint-disable-next-line react/prop-types
    let { id, task, removeTask } = props;
    return (
        <li onClick={() => removeTask(id)}>
            {task}
        </li>
    )
}
export default UseEffectExamples;