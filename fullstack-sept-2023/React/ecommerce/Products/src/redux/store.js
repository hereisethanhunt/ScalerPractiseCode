
import { configureStore, Tuple } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import cartSlice from './slices/CartSlice';


const store = configureStore({
    reducer : {
        cartState: cartSlice.reducer
    },
    // middleware: () => new Tuple(thunk,logger),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;