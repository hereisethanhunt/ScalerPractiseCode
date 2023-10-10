// Immediately invoked function expressions
// (function fn(){
// })()

// JS function defined as an expression, executed immediately after creation



// var myName = "vishal";
// console.log(window.myName);
// // global polluting


/** With IIFE */
// let multipleIIFE = (function(a,b){
//     return a*b;
// })(5,10);
// console.log(multipleIIFE);


/** Without IIFE */
// function multiple(a,b){
//     return a*b
// }
// console.log(window.multiple(1,2));


/** examples of IIFE */

// (function(){
//     let myName = 'vishal'; // 
//     function multipyFn(a,b) {
//         return a*b;
//     }
//     console.log(multipyFn(5,10));
//     console.log(myName);
// }
// )();

// var calculator = (function(){
//     var y = 1;
//     function multiply(a,b){
//         console.log(add(a,b)); // 7 
//         console.log(y); // closure has y variable
//         return a*b;
//     }
//     function add(a,b){
//         return a+b;
//     }
//     function subtract(a,b){
//         return a-b;
//     }
//     return {
//         subtract,
//         multiply,
//         add
//     }
// })();

// console.log(calculator.multiply(3,4));
// console.log(calculator);

/** how many variables are there in the closure of multiply function ?*/
