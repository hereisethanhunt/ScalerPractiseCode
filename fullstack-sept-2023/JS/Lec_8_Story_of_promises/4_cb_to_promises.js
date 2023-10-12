/**
 * 
 * promisifiy  fs.readfile 
 * */

let fs = require("fs");
// fs.readFile --> callback way of read file is present
// but we dont have fs.promises.readFile -->  this is not present
function promReadFile(filePath) {
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, function(err, data){
            if(err) reject(err);
            else resolve(data);
        })
    })
}

// var obj = new Promise(cb)
// function cb(res,rej){
//     // we will write our logic
//     // where to call res("resolved data"), and where to call rej("rejected data");
// }
// obj.then(cb1).catch(cb2)
// function cb1("resolved data"){
//     // it will receive the "resolved data"
// }
// function cb2("rejected data"){
//     // it will receive the "rejected data"
// }



// resolve ---> then()
// reject ---> catch()
/***consumption**/
console.log("Before");
const promise = promReadFile("./f11.txt");
console.log(promise);

promise
    .then(function (futureValue) {
        console.log("Data inside the file is " + futureValue);
    })
promise
    .catch(function (err) {
        console.log("err", err);
    })
console.log("After");


/**
 * 
 * cb -> passed to third party async fns
 * cb -> passed to promise ->third party async fn
 * **/ 
// Lecture 7: H2 - n Files in Series - questions
