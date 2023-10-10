// Q1_1
// function outer() {
//     let arrFn = [];
//     for (var i = 0 ;i < 3; i++) {
//         // console.log(i);
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     //console.log(i);
//     return arrFn;
// }
// var arrFn = outer();
// console.log(arrFn);
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


//q-1-2
/**
 * fn is taking value from closure -> i=3
 * */ 
// function outer() {
//     /**
//      * arrfns block scope refer to -> functions
//      * */ 
//     let arrFn = [];
//     let i=0;
//     for ( i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// var arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


/**
 * q1-3 : fn is getting diffrent values of i because here 
 * block scope is different for every iteration
*/


// function outer() {
//     /**
//      * arrfns block scope refer to -> functions
//      * */
//     let arrFn = [];
//     let j=0;
//     for (let i = 0; i < 3; i++) {
//         console.log(i);
//         arrFn.push(function fn() {
//             console.log(i);
//             console.log(j);
//         })
//     }
//     return arrFn;
// }
// var arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

