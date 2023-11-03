function debounce(fn, delay = 500) {
    let timeoutId; // clousre
    return function(...args){
        if(!!timeoutId){
            console.log("resetting timeout....")
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(function(){
            fn(...args);
        },delay);
    }
}

/**
 * first
 * timeout id = undefined
 * settimeout of 2sec has started
 * 
 * after 500msec
 * 
 * second time
 * timeoutid using closure id =1
 * cleartimeout (1) - this will clear previous timeout
 * 
 * settimeout of 2sec has started
 */

function printHello(args) {
    // we are making the api calls
    console.log("hello",args);
}
const debouncedPrintHello = debounce(printHello, 2000);

debouncedPrintHello([1,2,3]); 
setTimeout(() => {
    debouncedPrintHello();
    setTimeout(() => {
        debouncedPrintHello();
    }, 1000);
}, 1000)