const firstPromise = new Promise((res, rej) => {
    setTimeout(rej, 2000, 'one');
});
const secondPromise = new Promise((res, rej) => {
    // setTimeout(res, 100, 'two');
    setTimeout((arg) => {
        rej(arg)
    }, 3000, "two")
});

Promise.any([firstPromise, secondPromise])
.then(res => console.log(res))
.catch((err)=> console.log(err,"error"));


Promise.race([firstPromise, secondPromise])
.then(res => console.log(res))
.catch((err)=> console.log(err,"error"));

Promise.all([firstPromise, secondPromise])
    .then((res) => {
        console.log("res", res);
    }).catch((err) => {
        console.log("err", err);
    })


/**
 * promise.all means if all promises within the array 
 * passed are resolved,
 * then it will go to then clause, else even if one fails, 
 * it will go to catch

/**
 * promise.race means if an array of promises is passed
 * to the .race , then the first promise to get resolved or rejected
 * executes the respective then/catch clause
 */

/** Promise.any means whatever promise is resolved first, will be calling 
 * the then clause.
 * this will call catch only when all of the promise gets rejected
 */
