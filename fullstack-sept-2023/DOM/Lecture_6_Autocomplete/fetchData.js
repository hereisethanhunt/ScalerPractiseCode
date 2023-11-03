/**   make HTTP request fromm browser -> 
it is an promise based API*/
/***
 * Fetch API request ->
 * *  GET request  ->response object 
 * * response = header (metadata)+body(actual data)
 *      * extarct actual -> call response.json() and 
 *       this fn is also promise based 
 * * This  route -> should be public , or you should auth
 * */

// fetch(`https://restcountries.com/v3.1/name/india`,{
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
//     .then(
//         function (response) {
//             // response -> data(body)+ metadata(header)
//             console.log("response", response)
//             return response.json();
//         }
//     ).then((data) => {
//         console.log("data", data);
//     }).catch(err => {
//         console.log("in catch");
//         console.log("hello", err);
//     })

async function getCountries(keyword) {
    try {
        const rawResponse = await fetch(
            `https://restcountries.com/v3.1/name/${keyword}`,
            {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    }
            });
        // console.log(rawResponse.status);
        if(rawResponse.status > 299 || rawResponse.status < 200)
            throw new Error('Something went wrong')

        const response = await rawResponse.json();
        return response
    } catch (err) {
        console.log("err", err);
    }
}

export default getCountries;


