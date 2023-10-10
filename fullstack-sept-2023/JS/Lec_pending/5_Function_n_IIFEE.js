/**
 * functions are also object
 * object : key : value pair  
 * */

// fn defintion
// function fn() {
//     console.log("Hi I am an fn");
//     fn.count++;
// }
/** add a property to fn*/
// fn.count = 0;


/** method to a fn */
// fn.showCount = function () {
//     console.log("count on fn  is ", this.count);
// }

// fn();
// fn.showCount();
// console.dir(fn);

// for (let key in fn) {
//     console.log(key, ": ", fn[key]);
// }

/*documentation -> function are the object that implements callable constructor
/**Layman fn is an object that can also be called */



/***
 * function are first class citizens in JS -> 
 *  1. functions also behave as variables in JS
 *  2. Assign a variable , pass a variable as a parameter, return a variable  
 * */

/******a. assignment***/

/**fn experssion**/
// const addrFn = function () {
//     console.log(" I am a variable that's why addrfn stores my address");
// }
// addrFn();

/**** b. pass a variable as a parameter*/

// function fn(param) {
//     console.log(" I recived a param", param);
//     if (typeof param === "function") {
//         param()
//     }

// }
// function smallerfn() {
//     console.log("I am smaller");
// }
// fn({ name: "vishal" });
// fn(smallerfn);



/**** return fn from fn */

// const person = {name : 'varun'};
// function sayHi(age) {
//     return `${this.name} is ${age} years old`;
// }

// console.log(sayHi.bind(person, 24)());


/***HOF -> fn that accepts or returns a fn */

// function HOF(cb) {
//     console.log("Inside HOF");
//     cb();
// }
// HOF(smallerfn);



