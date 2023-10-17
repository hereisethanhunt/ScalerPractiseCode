let fs = require("fs");



/** to get value of an aync function, always do then or await */
async function fn(){
    setTimeout(async function(){
        let promise = fs.promises.readFile("./f1.txt", 'utf-8');
        // let promise = Promise.resolve('f1')
        let data = await promise
        console.log(data);
    },0);
    let promise1 = fs.promises.readFile("./f2.txt", 'utf-8');
    // let promise1 = Promise.resolve('f2')
    let data1 = await promise1;
    console.log(data1);
    let promise2 = fs.promises.readFile("./f3.txt", 'utf-8');
    // let promise2 = Promise.resolve('f3')
    let data2 = await promise2;
    console.log(data2);
    // return "value from fn"
}
console.log(fn());
// let valuefromfn1 = fn();
// console.log(valuefromfn1, "25");
// valuefromfn1.then((v)=>{
//     console.log(v);
// });

// let p = await valuefromfn1;
// console.log(p);




/*****
 * async keyword fn always return a pending promise so either await for or use then 
 * 
 * 
 * **/ 



// (async function fn(){
//     let promise = fs.promises.readFile("./f1.txt", 'utf-8');
//     let data = await promise
//     let variable1 = 5;
//     console.log(data);
//     let promise1 = fs.promises.readFile("./f2.txt", 'utf-8');
//     let data1 = await promise1;
//     console.log(data1);
//     console.log(variable1)
//     let promise2 = fs.promises.readFile("./f3.txt", 'utf-8');
//     let data2 = await promise2;
//     console.log(data2);
//     // return "value from fn"
// })()

// for(let i=0;i<3;i++)
// {
//     console.log(i);
// }