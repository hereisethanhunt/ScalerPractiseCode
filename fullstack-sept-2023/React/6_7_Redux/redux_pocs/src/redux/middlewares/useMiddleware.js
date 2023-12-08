
import userSlice from "../UserSlice";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserMiddleWare2 } from "./useMiddleware2";

const action = userSlice.actions;
export const fetchUserMiddleWare = (param) => {

     return async (dispatch) => {    
        dispatch(fetchUserMiddleWare2(param));
    }
}