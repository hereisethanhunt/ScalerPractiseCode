/***
 * What were issued with callbacks -> promises: inversion of control
 *   // cb based async fn -> cb to third party fns -> async fn can call your cb multiple times 
 *   // cb but here we send cb to the promise API : promise can be rejected or resolved once in the life time 
 * */

let fs = require("fs");

// // then 
// let promise = fs.promises.readFile("f11.txt",'utf-8');
/*** then is an event listner (handler) for a promise when promise state changes to resolved***/

// promise.then(function (data) {
//     console.log("Hi the data is 15 " + data);
// })

// promise.then(function (data) {
//     console.log("buffer format is 20", data);
// })

// promise.then(function () {
//     console.log("I am not accepting");
// })

/****catch is an event listenre (handler) for a promise when promise state changes to reject***/
// let promise = fs.promises.readFile("f11.txt",'utf-8');

// promise.catch(function (error) {
//     console.log("inside catch");
// })

// promise.catch(function (error) {
//     console.log("inside second catch", "no error message");
// })


/****
 * then takes two paramater -> both cb fns
 * first parameter -> is compulsary  and that is invoked when your promise is resolved
 * second parameter -> if present called when promise is rejected 
 * 
 * **/


// promise.then(scb, fcb);
// promise.catch(fcb); 
// promise.then(null, fcb);
// promise.finally(finallCB1);
// promise.finally(finallCB2);

// let promise = fs.promises.readFile("f11.txt",'utf-8');
// promise.then(scb,fcb);
// promise.then(null,fcb);
// promise.catch(fcb);
// promise.then(function(data){
//     console.log(data,"then")
// }, function(error){ 
//     console.log(error, "catch")
// });

// function scb(data) {
//     console.log("Hi the data is 15 " + data);
// }
// function fcb(error) {
//     console.log("inside catch", error.message);
// }

// function finallCB1() {
//     console.log(" I will be called finally");
// }

// function finallCB2() {
//     console.log(" I will be called finally");
// }


/**
 * promise.catch(fcb) -> promise.then(null, fcb);
 * try catch finally
 * 
 * then catch finally
 *
 * then , catch and finally -> event listener -> promise all of them will execute
 * resolve , reject, finally will be called on both the cases
 *
 * */

// Q1. 
// On reject -> 
// let promise = fs.promises.readFile("f11.txt",'utf-8');
// promise.then(null, fcb); 
// promise.catch(fcb);
// promise.finally(finallCB2);
// promise.finally(finallCB2);
// promise.finally(finallCB2);
// promise.finally(finallCB2);
// promise.finally(finallCB2);


/***
 * Promise
 * 1. resolve  -> promise with state resolved whatever you pass into it you that value
 * 2. reject  -> promise with state rejected whatever you pass into it as the value
 * **/



// const promise = Promise.resolve("1");
// promise.then(function (value) {
//     console.log("value", value);
// })
// promise.catch(function(err){
//     console.log(err); // will not be called in Promise.resolve scenarios
// })


// const promise1 = Promise.reject("Some error");
// promise1.catch(function (err) {
//     console.log("90");
//     console.log("error", err);
// })
// promise1.then(function () {
//     console.log("90", err);
// }).catch(function (err) {
//     console.log("92", err);
// })

// const promise1 = Promise.reject("Some error");
// promise1.then(null, function (err) {
//     console.log("90", err);
//     // return promise pending, value undefined
//     return Promise.reject(4);
// }).then(function (err) {
//     console.log("92", err);
// }).catch((err)=>{
//     console.log(err,"errr")
// })

// then , catch , finally 


// //  when you have a second then that is chained to the first then -> value promise
// //  received by the second then is return value of the scb / fcb of the first then


/*************************Q2*********************/
// let promise = Promise.resolve(10);

// promise.then(function (data) {
//     console.log("92", data);
//     // return promise<pending> undefined
// }).then(function (firstThenVal) {
//     // undefined
//     console.log("113", firstThenVal);
//     return 100
// }).then(function (secondThenVal) {
//     // 100
//     console.log("116", secondThenVal);
//     return fs.promises.readFile("f1.txt",'utf-8')
// }).then(function (thirdThen) {
//     // i am f1
//     console.log("120", thirdThen);
// })

/** q2.1 */

// let promise = Promise.resolve(10);
// promise
//     .then(function (data) {
//         // 10
//         console.log("92", data);
//         // return Promise<pending> undefined
//         return Promise.reject(1)
//         // return Promise.reject(1) --> go to catch
//         // return 4 , undefined , Promise.resolve(4) --> go to then
//     }).catch(function (firstThenVal) {
//         console.log("113", firstThenVal);
//         return 100;
//         // Promise <fulfilled> 100
//     }).then(function (secondThenVal) {
//         console.log("116", secondThenVal);
//         return fs.promises.readFile("f1.txt",'utf-8');
//     }).then(function (thirdThen) {
//         console.log("120", thirdThen);
//     })

/*************************Q3*********************/

// let promise = Promise.resolve(10);
// promise
//     .then(function (data) {
//         console.log("92", data);
//         return "hello";
//     }).catch(function (firstThenVal) {
//         console.log("113", firstThenVal);
//         return 100;
//     }).then(function (secondThenVal) {
//         console.log("116", secondThenVal);
//         return fs.promises.readFile("f1.txt");
//     }).then(function (thirdThen) {
//         console.log("120", thirdThen);
//         // return undefined, promise pending
//     }).catch(function (firstThenVal) {
//         console.log("113", firstThenVal);
//         return 100
//     })


/***
 * catch -> if it is recreiving a rejected value/ error -> it will take it 
 * then -> then will completely ignored 
 * and vice versa 
 * 
 * do not leave a rejected promise openly because that completley halt your code 
 * */


/**
 * 1. Eventlistener -> then ,catch , finally
 * 2. Then -> resolved, catch -> reject, finally -> both individually
 * 2.2 -> catch will always accept -> rejection/error and  then -> always accept values/ promises
 * 3. Chaining then/catch -> rejection|Error -> catch/ everything else -> next then will be called 
 * 4. no catch code stops executing 
 * ***/ 

/**
 * 1.finally -> do not take anything 
 * 2.for values and promises -> it does not returns anything / and neither take anything
 * 3.Rejection -> goes to catch -> and give it the error/ rejection
 * 
 * **/ 



// let promise = Promise.reject(10);
// promise
//     .catch(function (firstThenVal) {
//         console.log("113", firstThenVal);
//         return 100;
//     }).then(function (secondThenVal) {
//         console.log("116", secondThenVal);
//         return fs.promises.readFile("f11.txt");
//     }).catch(function (firstThenVal) {
//         console.log("113", firstThenVal);
//         return 100
//     }).finally(function(){
//         console.log("finaly");
//         return Promise.reject(4);
//     }).catch(function(value){
//         console.log(value, "last then"); // ---> answer
//     })

/** Finally is always called either after then or catch
 * Finally doesnt accept any parameter
 * Finally doesnt return anything
 * Finally only return when there is a reject getting called or a error is thrown.
 */

// question

// let promise = Promise.resolve(1);

// promise.finally(() => {
//     console.log('first finally');
//     return Promise.reject(4);
// })
// .then(data => {
//     console.log('first then', data);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 5000);
//     });
// })
// .then(data => {
//     console.log('second then', data);
//     return data
// })
// .finally((data)=>{
//     console.log('second finally', data)
// })

// question

let promise = Promise.resolve(1);
console.log('before')

promise.finally(() => {
    console.log('first finally');
})
.then(data => {
    console.log('first then', data);
    return data
})
.then(data => {
    console.log('second then', data);
    return Promise.reject(4)
})
.finally((data)=>{
    console.log('second finally', data)
    return Promise.reject(4);
}).catch(e=>{
    console.log(e ,"error")
})

// console.log('after')

// question

// let promise = new Promise((res,rej)=>{
//     console.log('inside promise');
//     res(1);
// })
// console.log(promise);

// console.log('before');

// promise.finally(() => {
//     console.log('first finally');
// })
// .then(data => {
//     console.log('first then', data);
//     return data
// })
// .then(data => {
//     console.log('second then', data);
//     return data
// })
// .finally((data)=>{
//     console.log('second finally', data)
// })

// console.log('after')



// https://bigfrontend.dev/
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge
// https://www.javascripttutorial.net/javascript-prototypal-inheritance/
