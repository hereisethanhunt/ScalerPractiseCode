const fs = require("fs");
console.log("before");

const promise = fs.promises.readFile("./f1.txt",'utf-8');


/***consumption of promise*/
// await only works inside a function with async keyword

// async await
async function fn() {
    try {
        const data = promise;
        console.log(data);
        // data.then((value)=>{
        //     console.log(value.toString());
        // })
        console.log("Data inside the file is " + data);
    } catch (err) {
        console.log("err", err);
    }
}
fn();


// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     }).catch(function (err) {
//         console.log("err", err);
//     })

console.log("After");
