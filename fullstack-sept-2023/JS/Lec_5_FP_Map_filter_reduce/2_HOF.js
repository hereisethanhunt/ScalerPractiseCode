/**
 * Problem : What is problem
 * What are HOF
 *  Different Inbuilt HOF 
 * */

// HIGHER ORDER FUNCTIONS.
// A FUNCTION WHICH ACCEPTS ANOTHER FUNCTION AS PARAM OR RETURN A FUNCTION IS A HOF

// let arr = [2, 3, 4, 5];
//  following DRY
// code to square every element in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i]
// }

// // code to cube every elemnt in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i] * arr[i];
// }
// console.log("arr",arr);




// function transformer(arr, logic) {
//     let newArr = [];
//     for(let i=0; i < arr.length; i++)
//     {
//         let calculatedValue = logic(arr[i]);
//         newArr.push(calculatedValue)
//     }
//     return newArr;
// }
// // smaller 
// function squarer(elem) {
//     return elem * elem
// }
// const squaredArr = transformer(arr, squarer);
// console.log(squaredArr);
// function cuber(elem) {
//     return elem * elem * elem
// }
// const cubedArr = transformer(arr, cuber);
// console.log("cubedArr", cubedArr);


/***
 * HOF  -> are the function that accepts a fn as a parameter or returns a function
 * Callbacks -> function that are passed as a paramtere to another are known as cb fns. 
 * They usually be called by HOFns 
 * */



/***
 * HOF -> majorly available on arrays
 *  these fn doesn't change the source array
    * foreach -> 
    * Map -> 
    * filter -> 
    * reduce -> 
    * sort -> 
 * */



/***traversal -> it is used to travsrese the arr*/
// let arr = [2, 3, 4, 5];


// function printELem(elem) {
//     console.log(elem * elem);
// }
// arr.forEach(printELem)
// console.log(arr);


// THIS IS A ITERATIONS
// arr.forEach((value,index,array)=>{
//     console.log(value , index, array);
// });

// forEach is a HOF

// Array.prototype.customforeach = function(cb){
    
//     for(let i=0; i< this.length ; i++)
//     {
//         cb(this[i], i, this)
//     }
// }

// function as(){
    
// }
// arr.customforeach((val, index, array)=>{
//     console.log(val , "custom foreach");
// });




// var arr1 = new Array(2,3,4,5);
// console.log(arr1, ":arr1");

/***************Map-> It changes every element according to the cb fn*****/

// let arr = [2, 3, 4, 5];
// function squarer(elem) {
//     return elem * elem;
// }
// function cuber(elem) {
//     return elem * elem * elem;
// }

// let squaredArr = arr.map(squarer);
// console.log("squaredArr", squaredArr);

// let cubedArr = arr.map(cuber);
// console.log("cubedArr", cubedArr);

// let newArr = arr.map((value,index,array)=>{
//     if(index % 2 === 0)
//         return value;
//     else
//         return value+2;
// })

// console.log(arr, "oldarray");
// console.log(newArr,"newarray");


/**Polyfill of map*/
Array.prototype.myMap = function (cb) {
    let newArr = [];
    for(let i=0; i< this.length; i++)
    {
        // newArr = [...newArr,cb(this[i], i, this)];
        let newElement = cb(this[i], i, this)
        newArr.push(newElement)
    }
    return newArr;
}


// let arr = [10, 20, 30]
let squaredArr = arr.myMap((val)=>{
    return val*val;
});
console.log("squaredArr", squaredArr);
// let cubedArr = arr.myMap((val)=>{
//     return val*val*val;
// });
// console.log("cubedArr", cubedArr);



/*********************filter -> it filters the elem on the basis of testLogic**/
/*traverse through every elem -> elem to cb fn if cb fn returns true
-> it will add that elem to a new Arr at the end it returns the new Arr*/
// let elems = [1, 2, 3, 11, 4, 5, 34, 12];

// function isOdd(elem) {
//     return elem % 2 == 1;
// }

// function isgtr5(elem) {
//     return elem > 5;
// }

// odd values
// let oddvaluesArr = elems.filter(isgtr5);
// console.log("oddvaluesArr", oddvaluesArr);
// console.log("elem", elems);


// let newElems = elems.filter((val,ind,arr)=>{
//     if(val > 5)
//         return true;
//     else
//         return false;
// })
// console.log(newElems);
/**write ployfill of filter -> HW*/


// Array.prototype.myFilter = function (cb) {

//     let newArr = [];
//     for(let i=0; i< this.length; i++)
//     {
//         if(cb(this[i], i, this))
//             newArr.push(this[i])
//     }
//     return newArr;
// }

// let newElems1 = elems.myFilter((val,ind,arr)=>{
//     if(val > 5)
//         return true;
//     else
//         return false;
// })
// console.log(newElems1);

// let evenvaluesArr = elems.myFilter((v,i)=>{
//     return (v % 2 === 0) 
// });
// console.log(evenvaluesArr)

// let newArr1 = [{value : 0}, {value : 2},{value : 3},{value : 4}];
// let valuesArr = newArr1.myFilter((v,i)=>{
//     return v.value % 2 === 0;
// });
// console.log(valuesArr)


/*********************reduce******************/
// want to reduce to a single value : number, object, anotherarray


// let elems = [1, 2, 3, 4, 5];

// 1st run  = acc => 0 , val 1
// 2nd run = acc => 0+1 , val 2
// 3rd run = 3, val 3
// 6, 4
// 10, 5
// 15

// let fAcc1 = elems.reduce((acc,val,index,arr)=>{
//     console.log(acc, val, index, arr);
//     return acc + val;
// },0);
// console.log(fAcc1);



// let fAcc2 = elems.reduce((acc,val,index,arr)=>{
//     console.log(acc, val, index, arr);
//     return acc * val;
// },1);

// console.log(fAcc2);

// function sum(acc, elem) {
//     return acc + elem;
// }
// function product(acc, elem) {
//     return acc * elem;
// }


// console.log("sum", sumValues);
// const prodValues = elems.reduce(product);
// console.log("prod", prodValues);



// reduce the array to space separated string.


// let elems = [1, 2, 3, 4, 5];
// ans = "1 2 3 4 5"

// let fAcc3 = elems.reduce((acc,val,index,arr)=>{
//     return acc + val + " "
// },"");
// console.log(fAcc3.trim());

// var string1 = "       fdfd   dsd  ";
// console.log(string1.trim());


// convert array to object of format { e1 : v1 , e2 : v2 ....}
let elems = [1, 2, 3, 4, 5];

// {
//     "element1" : 1,
//     "element2" : 2,
//     ...
//     ...
// }

let fArr4 = elems.reduce((acc, val, index, arr)=>{
    let key = `element${index + 1}`;

    // console.log(acc, index)

    acc[key] = val;
    return acc;
},{});

console.log(fArr4);

// var a1 = "apple"
// var obj1 = {
//     [`key${a1}`] : "122"
// }

/**final version-> polyfill of reduce**/

Array.prototype.reducer = function (cb, acc) {
    for(let i = 0; i< this.length; i++){
        console.log(acc, this[i], "loop");
        acc = cb(acc, this[i], i, this)
    }

    return acc;
}

const sumVal = elems.reducer((acc,val,ind,arr)=>{
    return acc + val;
}, 10);

console.log("sumVall", sumVal);





// deep check 2 objects if similar or not.











