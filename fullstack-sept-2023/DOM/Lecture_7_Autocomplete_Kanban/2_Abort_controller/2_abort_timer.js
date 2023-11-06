
// 1. create a instance from AbortController
const abortcontroller = new AbortController();
(async function () {
    // fetch -> url , options
    try {
        // 2. attach signal to a fetch request 
        const responsePromise = fetch("https://restcountries.com/v3.1/name/india",
            { signal: abortcontroller.signal });
        setTimeout(()=>{
            abortcontroller.abort();
        },500);
        const rawResponse = await responsePromise;
        const response = await rawResponse.json();
        console.log(response);
        console.log("request is send");
        // 3. call abort 
    } catch (err) {
        if(err.name === "AbortError")
        {
            console.log(err);
            console.log("User has aborted");

        }
        else
        {
            console.log(err);
        }
    }
})();

