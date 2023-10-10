



/**
 * Closure : inner fn forms closure over outer fn's variable and it's variables are persent
 * even if outer fn is removed from the stack .
 *  When closure is fromed -> when a inner fn is hoisted, it form closure over outer variable
 * */


// var count = 1000;
// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }

// // console.log(outerFunction()());
// // console.log(outerFunction()());

// var innerFunc = outerFunction();
// console.log(innerFunc);
// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());







// function innerFunction() {
//     count++;
//     return count
// }

// function outerFunction() {
//     let count = 0;
//     let count1= 0;

//     return innerFunction()
// }
//const innerFunc = outerFunction();
// console.log(innerFunc())
// console.log(innerFunc())



// function createCounter(init, delta) {
//     function count() {
//         // init - 10 , delta - 5 through closure
//         // init - 15 , delta - 5 throug closure second fn call.
//         init = init + delta;
//         // 15 // first loop
//         // 20 // second loop
//         return init;
//     }
//     return count;
// }
// var c1 = createCounter(10, 5);  // c1 -> count (init=10, delta =5 )
// var c2 = createCounter(5, 2);

// console.log(c1())  // 15 
// console.log(c1()) // 20
// console.log(c2()) // 7
// console.log(c2()) // 9


/***
 * Nested closure : you will get access to outer variable even if the 
 * outer fn is not your direct parent
 * */
// var iamINGEC = 200; // access is not through closure but through lexical
// function getFirstName(firstName) {
//     return function getLastName(lastName) {

//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`); // closure 
//             console.log("Hi GEC", iamINGEC) // lexical scope
//         }
//     }
// }


// // getLastName closure have firstName = vishal

// // greeter fn closure have lastName = singh 
// // and firstName = vishal

// var fnNameRtrn = getFirstName("vishal");
// console.log(fnNameRtrn); // getLastName

// var lnNameRtrn = fnNameRtrn("Singh");
// console.log(lnNameRtrn); // greeter

// lnNameRtrn();


/**
 * Every code is executed in an EC : 
 * 1. this , 
 * 2. local fn and var , 
 * 3. global,window obj 
 * 4. lexical scope
 * 5. closure -> till GEC
 * 
 * */


/***
 * Application of closures 
 * 1.  currying : taking one input at a time and you use the input later 
 * **/
/*get all the inputs at once -> we can execute the code */
// function greeter(firstName, lastName) {
//     console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
// }
// greeter("Jasbir", "singh")


// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
//         }
//     }
// }
// //1 -> shorthand

// getFirstName("Jasbir")("Singh")();




// const getLastName = getFirstName("Jasbir");
// console.log("Task in between");

// const greeter = getLastName("Singh");
// console.log("Task in between");

// greeter();









