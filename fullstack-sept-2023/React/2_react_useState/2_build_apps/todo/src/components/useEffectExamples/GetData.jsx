import { useEffect, useState } from 'react'

function GetData() {
    
    const [data, setData] = useState(null);

    useEffect(()=>{
        async function callDataApi(){
            const rawData = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await rawData.json();
            setData(data);
        }
        callDataApi()
        console.log("inside useeffect")
    }, []);

    console.log("Render");

    return (
        <>
            {
                data === null ? <>Loading</> : (
                    <>
                    <div>{data.username}</div>
                    <div>{data.website}</div>
                    <div>{data.name}</div>
                    </>
                )
            }
        </>
    )
}

export default GetData
// https://jsonplaceholder.typicode.com/users/1