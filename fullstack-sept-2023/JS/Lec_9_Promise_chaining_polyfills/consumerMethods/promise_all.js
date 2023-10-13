const fs = require("fs");


const promise = fs.promises.readFile("f1.txt",'utf-8');
const promise2 = fs.promises.readFile("f2.txt",'utf-8');
const promise3 = Promise.reject(4);
const combinedpromise = Promise.all([promise, promise2, promise3]);
combinedpromise.then(function (resultArr) {
    console.log(resultArr);
    // [p1,p2]
    // [ans1, ans2]
}).catch((err)=>{
    console.log(err,"errr")
})

// if all the promises are resolved, then only u get the answer in array
// else even if one promise fails or rejects, u will be gone to the catch clause



// const promise3 = fs.promises.readFile("f1.txt");
// const promise4 = fs.promises.readFile("f11.txt");
// const combinedpromise1 = Promise.all([promise, promise2, promise3, promise4]);
// combinedpromise1.then(function (resultArr) {
//     console.log(resultArr)
// }).catch((err)=>{
//     console.log("rejected promiseall", err);
// })


// homework
// Learn about promise.race and promise.any








