import { useEffect, useState } from 'react';

function UseEffectExamples() {
    const [value, setValue] = useState("");
    const [taskList, setTaskList] = useState([]);

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

        console.log(taskList); // ["qwerty","abc"]

        let restOftasks = taskList.filter(function (taskObject) {
            return taskObject.id != id;
        })
        console.log(restOftasks);
        setTaskList(restOftasks); // ["abc"]
    }

    const updateInput = (e) => {
        setValue(e.target.value);
      }


    // this useeffect is called only once after the first render
    // usecase - fetch data in the beginning after first render.
    // useEffect(()=>{
    //     console.log("useeffect empty arrray")
    // },[]);
    // useEffect(()=>{
    //     console.log("useeffect empty arrray")

    //     return function(){
    //         console.log("cleanup of useeffect with empty arrray dep.")
    //     }
    // },[]);




    // this useeffect is called everytime after each rendering
    // use case - like an autosave.
    // useEffect(()=>{
    //     console.log("useffect without second param")
    // }); 
    useEffect(()=>{
        let cleanup = value;
        console.log("useffect without second param", cleanup)
        return function(){
            console.log("cleanup of useeffect without second param", cleanup)
        }
    });



    // usecase - when we need to update data on some UI change
    // this useeffect is called after first render and after the change of state of the dependent array
    // useEffect(()=>{
    //     console.log("useeffect with dependency array")
    // },[taskList]);
    // useEffect(()=>{
    //     console.log("useeffect with dependency array");
    //     return function(){
    //         console.log("cleanup of useeffect with dependency array")
    //     }
    // },[taskList]);

    // props, state, contextapi state --> dependent to this component.
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
            { taskList && taskList?.map((taskObj) => {
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
    let { id, task, removeTask } = props;
    console.log("render the task child", props);
    // useEffect(()=>{
    //     console.log("child - useeffect empty arrray" , props)
    //     return function(){
    //         console.log("child - cleanup of useeffect with empty arrray dep.")
    //     }
    // },[]);

   
    return (
        <li onClick={() => removeTask(id)}>
            {task}
        </li>
    )
}
export default UseEffectExamples;
/***
 * UseEffect -> to be called after render
 * 1. cb is called once in the liftime -> useffect(fn,[])
 *      cleanup -> after component is removed from UI
 *      usecase : on page first Load data fetaching  
 * 2. cb is called n number of time in the liftime -> useEffect (fn);
 *      usecase : autosave 5sec 
 *      cleanup -> before next Useffect call
 * 3. cb is called if dependecy updates number of time in the liftime -> useEffect (fn,[dp1,dep2])
 *      cleanup -> before next Useffect call
 *      usecase : 
 * 
 * */ 