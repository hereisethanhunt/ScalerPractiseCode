// infinite curry

// function counter(args1){
//     var count = 1;
//     if(args1 === 0)
//         return count;
//     else
//     {
//         return function inner(args2){
//             count++;
//             if(args2 === 0)
//                 return count;
//             else
//                 return inner;
//         }
//     }
    
// }


// console.log(counter()(0)) //--> print -> 2
// console.log(counter()()()()(0)) //--> print -> 5
// console.log(counter(0)) //--> print -> 1
// console.log(counter()()()()()()(0)) //--> print -> 7



// HW SUM
// function sum() {
// }
// console.log(sum(3)(4)()) // ---> 7
// console.log(sum(3)(4)(4)()) // ---> 11


// HW SUM
// function sumwithExtraArgs() {
// }
// console.log(sumwithExtraArgs(4,4)(4,4,6,6)()) // ---> 27


/**
 * Memoization function
 * creating private variables
 * */


/***************Private variables******/
// function createEvenStack() {
//     let items = []; // private variable
//     return {
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 items.push(item);
//             }
//             else {
//                 console.log("Please input even value");
//             }
//         },
//         pop() {
//             return items.pop();
//         },
//         value() {
//             return items;
//         }
//     };
// }


// const stack = createEvenStack();
// console.log(stack); // closure which has a value of items = []

// stack.push(10);  // item = [10]
// stack.push(5); // odd 

// // inside my closure my item is now item =[10]

// console.log(stack.items); // undefined

// console.log(stack.value()); // value of items

// items cannot be accessed directly outside the object

/**
 * Memoization : sum calculation take a lot of time  with 
 * memoization we can store  result of costly calculations -> useMemo
 * */

// n = 5
// n = 6

// n = 5
// function calc(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum += n;
//     }
//     return sum;
// }
// console.log(calc(5));
// console.log(calc(5));
// console.log(calc(5));

// 25
// 36
// 25

// function memoize(fn){
//     let cache = {}; // private variable
//     return function(n) {
//         if(cache[n] !== undefined){
//             console.log("cached.....")
//             return cache[n];
//         }
//         else
//         {
//             console.log("calculating.....")
//             let ans = fn(n);
//             cache[n] = ans; // { 5 : 25 }
//             return cache[n];
//         }
//     }
// }

// let efficentCalcFN = memoize(calc);
// console.time();
// console.log(efficentCalcFN(5));
// console.timeEnd();

// console.log("---------------")

// console.time();
// console.log(efficentCalcFN(5));
// console.timeEnd();
