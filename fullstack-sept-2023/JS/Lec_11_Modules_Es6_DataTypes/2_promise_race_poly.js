Promise.myPromiseRace = function (arrayOFPromises) {
    return new Promise(function (resolve, reject) {
        arrayOFPromises.forEach(async (eachPromise)=>{
            try {
                let ans = await eachPromise;
                resolve(ans);
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
                    resolve('1');
                }, 3000);
            });
const p2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('2');
                }, 1000);
            });

Promise.myPromiseRace([p0, p1, p2])
.then(console.log, (err) => {console.log(err)})

Promise.race([p0, p1, p2])
.then(console.log, (err) => {console.log(err)})


/** promise.any polyfill homework */
