
import userSlice from "../UserSlice";
import { useSelector, useDispatch } from 'react-redux';

const action = userSlice.actions;
export const fetchUserMiddleWare2 = (param) => {

     return async (dispatch) => {    
        try {
            dispatch(action.userLoading());
            const rawData = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const data = await rawData.json();
            dispatch(action.userData(data));
        }
        catch(e){
            dispatch(action.userError());
        }
    }
}