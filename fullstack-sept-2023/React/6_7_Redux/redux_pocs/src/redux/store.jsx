
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './CounterSlice';
import todoSlice from './TodoSlice';
import userSlice from './UserSlice';

const store = configureStore({
    reducer : {
        counterState : counterSlice.reducer,
        todoState: todoSlice.reducer,
        userState: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;