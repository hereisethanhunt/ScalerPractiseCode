import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : 'userSlice',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    reducers : {
        userLoading: (state) => {
            state.loading = true;
            state.error = false;
        },
        userError: (state) => {
            state.error = true;
            state.loading = false;
        },
        userData: (state,action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload
        }
    },
});

export default userSlice;