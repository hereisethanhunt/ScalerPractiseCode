
/***********chaining your then and catch**********/

// const fs = require("fs");
// console.log("before");

// const promise = fs.promises.readFile("./f1.txt");

// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     }).catch(function (err) {
//         console.log("err", err);
//     })

    // promise.then(function (futureValue) {
    //     console.log("Data inside the file is " + futureValue);
    // })

    // promise.catch(function (err) {
    //     console.log("err", err);
    // })



// console.log("After");


/***************then chaining************/


/****
 *CallBack hell-> inital defintion
 *     1. Nesting of callbacks -> when we have have to do serial tasks using async fns -> Pyramid of DOOM
 *      i want to read all the files serially
 *     2. Inversion of control : we send our callback function to an async fn and
 *  then that async fn has the control to call it(Trust issues)  
 * */

/****************heart attack code************/
// let fs = require("fs");
// console.log("Before");
// fs.readFile("./f1.txt", function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("content " + data);
//         fs.readFile("./f2.txt", function (err, data) {
//             if (err) {
//                 console.log("error " + err)
//             } else {
//                 console.log("content " + data);
//                 fs.readFile("./f3.txt", function (err, data) {
//                     if (err) {
//                         console.log("Error", err);
//                     } else {
//                         console.log("content " + data);
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log("After");



/*******************nested then*************/

let fs = require("fs");
console.log("Before");
/**
 * promise hell
 * */
// let promise = fs.promises.readFile("./f1.txt");
// promise.then((val)=>{
//     console.log('content is ' + val);
//     let promise1 = fs.promises.readFile("./f2.txt");
//     promise1.then((val1)=>{
//         console.log('content is ' + val1);
//         let promise2 = fs.promises.readFile("./f3.txt");
//         promise2.then((val2)=>{
//             console.log('content is ' + val2);
//         })
//     })
    
// })

// console.log("after");
/*******************chaining *********************/


// console.log("before");
let promise = fs.promises.readFile("./f1.txt");
promise.then((data1)=>{
    console.log('content is ' + data1);
    return fs.promises.readFile("./f22.txt");
}).then((data2)=>{
    console.log('content is ' + data2);
    return fs.promises.readFile("./f3.txt");
}).then((data3)=>{
    console.log('content is ' + data3);
}).catch((err)=>{
    console.log(err, "data3");
})

console.log("after");
