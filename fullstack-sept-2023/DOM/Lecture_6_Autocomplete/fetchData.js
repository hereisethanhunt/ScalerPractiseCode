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

let currentApiContext = null;
async function getCountries(keyword) {
    try {
        if(!!currentApiContext) {
            currentApiContext.abort();
        }
        const abortcontroller = new AbortController();
        currentApiContext = abortcontroller;
        const rawResponse = await fetch(
            `https://restcountries.com/v3.1/name/${keyword}`,
            {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    signal: abortcontroller.signal
            });
        currentApiContext = null; // rawResponse
        if(rawResponse.status > 299 || rawResponse.status < 200)
            throw new Error('Something went wrong')
        const response = await rawResponse.json();
        return response
    } catch (err) {
        if(err.name === "AbortError")
        {
            console.log(err);
            console.log("User has aborted");
        }
        else
        {
            currentApiContext = null;
            console.log(err, "hello");
        }
    }
}

export default getCountries;


