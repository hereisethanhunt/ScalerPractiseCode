import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'counterSlice',
    initialState: {
        count : 0,
    },
    reducers : {
        increment : (state,params) => {
            console.log(params);
            state.count += 1;
        },
        decrement : (state,params) => {
            console.log(params);
            state.count -= 1;
        }
    }
});

export default counterSlice;