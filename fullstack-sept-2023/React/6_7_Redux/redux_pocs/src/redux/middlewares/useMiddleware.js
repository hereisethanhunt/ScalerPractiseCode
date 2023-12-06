
import userSlice from "../UserSlice";

const action = userSlice.actions;
export const fetchUserMiddleWare = (param) => {
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