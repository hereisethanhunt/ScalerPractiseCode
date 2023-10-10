/****
 * Synchronous code-> the code that excutes line by line
 * **/


// console.log("Before");
// function fn() {
//     console.log("I am fn");
// }
// fn();
// console.log("After");












/***
 * Asynchronous code -> piece of code is executed at current point of time
 *  and other piece of code is executed on later part
 * 
 * 
 * */


// console.log("Before");

// function fn() {
//     console.log("I am fn");
// }
// setTimeout(fn, 2000);

// console.log("After");





/****
 * Enviornment : Browser
    * Web API :
        * console -> is not part of JS
        * window :  -> is not part of JS
        * document : -> is not part of JS
        * fetch : --> is not part of JS
        * eventListners -> not part of JS
* Enviornment : Nodejs
    * fs : nodejs
    * Http : nodejs
    * child_process : nodejs 
 * Thumbrule : 
 *  ->Enviornment :provides you the feature
 *  -> JS : provides the logic 
 *  -> Programmer : 
 *          JAVA -> JS -> there are no threads to take care of 
 *  Inference : You cannot create an asynchronous fns -> provided by Envirornment 
 * */





// let a = true;
// console.log("Before");

// setTimeout(() => {
//     a = false;
//     console.log("I broke while loop");
// }, 1000);
// console.log("After");
// while (a) {
// }










// let a = true;
// console.log("Before");

// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);
// console.log("After");

// let timeInfuture = Date.now() + 5000;
// while (Date.now() < timeInfuture) {

// }









console.log("Before");
const cb2 = () => {
    console.log("set timeout 1");
    let timeInfuture = Date.now() + 5000;
    while (Date.now() < timeInfuture) {

    }
}
const cb1 = () => console.log("hello");
setTimeout(cb1, 2000)
setTimeout(cb2, 1000)



console.log("After");


// variation
