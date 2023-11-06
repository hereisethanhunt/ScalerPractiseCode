/***
 * Problem statement -> cachedFetch(timer);
 * */
/**homework */

function createCachedFetch(expirey) {
    // Cached data storage
    const cache = {};
    return async function cachedFetch(url) {
       // homework
    };
}

const cachedFetch = createCachedFetch(10000);
// Example usage
const apiUrl = 'https://api.example.com/data';

cachedFetch(apiUrl)
    .then(data => {
        // Handle the fetched data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });