// inbuilt API 
// 1 create a instance from AbortController
const abortcontroller = new AbortController();
(async function () {
    // fetch -> url , options
    try {
        // 2 attach signal to a fetch request 
        const responsePromise = fetch("https://restcountries.com/v3.1/name/india",
            { signal: abortcontroller.signal });
        abortcontroller.abort();
    } catch (err) {
       
    }
})();


