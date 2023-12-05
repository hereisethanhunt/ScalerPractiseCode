import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : 'todoSlice',
    initialState: {
        todoArr : [],
    },
    reducers : {
        addTask : (state, params) => {
            const {payload} = params;
            console.log(payload);  
            let newTasks = [payload, ...state.todoArr];
            state.todoArr = newTasks;
        }
    }
    // hw
    // delete functionality and edit functionality to the todoapp.
});

export default todoSlice;