import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserMiddleWare } from '../../redux/middlewares/useMiddleware';
import userSlice from '../../redux/UserSlice';
const action = userSlice.actions;
function UserRedux() {

  const {loading, error, data} = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  useEffect(()=>{
    // fetchUserMiddleWare(2);
    dispatch(fetchUserMiddleWare(2));
    // dispatch(action.userLoading())
    return function(){
        console.log("abort controller of the api call which is in progress while unmounting comp")
    }
  },[]);

  if(loading) {
    return <div>Loading.....</div>
  }
  if(error) {
    return <div>This component errored out</div>
  }

  return (
    <>
        <div>UserRedux</div>
        <div>{data?.name}</div>
        <div>{data?.username}</div>
        <div>{data?.email}</div>
    </>
  )
}

export default UserRedux



// const [loading, setLoading] = useState(false)
// const [error, setError] = useState(false)
// const [data, setData] = useState({});
// async function getUserData(){
//     try {
//         setLoading(true);//
//         setError(false);//
//         const rawData = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         const data = await rawData.json();
//         setLoading(false);
//         setData(data);
//         console.log(data);
//     }
//     catch(e){
//         setError(true);
//         setLoading(false)
//         console.log(e);
//     }
// }
// getUserData();