Promise.myPromiseALL = function (arrayOFPromises) {
    return new Promise(function (resolve, reject) {
        let ansArray = [];
        let len = arrayOFPromises.length;
        arrayOFPromises.forEach(async (eachPromise)=>{
            try {
                let ans = await eachPromise;
                ansArray.push(ans);
                len--;
                if(len === 0)
                    resolve(ansArray);
                // resolve 

            }
            catch(err){
                reject(err);
            }
        })
    })
}
//  when all the promises are resolved
const p0 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('foo');
                }, 2000);
            });
const p1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('foo');
                }, 3000);
            });
const p2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('foo');
                }, 1000);
            });

Promise.myPromiseALL([p0, p1, p2])
.then(console.log, (err) => {console.log(err)})

Promise.all([p0, p1, p2])
.then(console.log, (err) => {console.log(err)})

// promise.all means if all promises within the array passed are resolved,
// then it will go to then clause, else even if one fails, it will go to catch



// //  when either of the promise gets rejected

// const p0 = Promise.resolve(30);
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('An error occurred!');
//     }, 100);
// });
// const p2 = 42;

// Promise.all([p0, p1, p2]).then((res) => {
//     console.log("res", res);
// }).catch((err)=>{
//     console.log("err", err);
// })
//Promise.myPromiseALL([p0, p1, p2]).then(console.log, console.log);




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


/** Creating a Custom promise */
/** Will be given as recordings */




// Promise.all([p0, p1, p2])
//     .then((res) => {
//         console.log("res", res);
//     }).catch((err) => {
//         console.log("err", err);
//     })