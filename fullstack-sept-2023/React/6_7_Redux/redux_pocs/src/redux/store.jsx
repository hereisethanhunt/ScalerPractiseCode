
import { configureStore, Tuple } from '@reduxjs/toolkit'
import counterSlice from './CounterSlice';
import todoSlice from './TodoSlice';
import userSlice from './UserSlice';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';


const store = configureStore({
    reducer : {
        counterState : counterSlice.reducer,
        todoState: todoSlice.reducer,
        userState: userSlice.reducer
    },
    // middleware: () => new Tuple(thunk,logger),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;