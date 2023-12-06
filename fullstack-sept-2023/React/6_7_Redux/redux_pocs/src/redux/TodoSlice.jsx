import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : 'todoSlice',
    initialState: {
        todoArr : [],
        variableState: 0,
    },
    reducers : {
        addTask : (state, params) => {
            const {payload} = params;
            console.log(payload);  
            let newTasks = [payload, ...state.todoArr];
            state.todoArr = newTasks;
        },
        // only functions expected inside our reducers object inside slice
        variableState : (state) => {
            state.variableState = 2;
        }
        // variableState : 2
    }
    // hw
    // delete functionality and edit functionality to the todoapp.
});

export default todoSlice;