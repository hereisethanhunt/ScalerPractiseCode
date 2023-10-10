/**
 * default parameter 
 * **/

// function fn(param1, param2, param3 = "default") {
//     console.log("Hi params are ", param1, param2, param3);
// }

// fn("Hi", "Hello", "Hola");
// fn("Hi", "Hello");



/**
// 
 * spread operator : copies value,ref from on array to another for only first level
 * 
 * */

// let arr1 = [1,2,3,4,5];
// let arr2 = [1,3,4,5,7];
// console.log(Math.max(...arr1,...arr2));
//console.log(Math.max(1,2,3,4,5,1,3,4,5,7))


// assignment operator -> reference remain
// let arr1 = [1, 2, 3, 4, 5];
// // arr2 and arr has the same ref
// let arr2 = arr1;  // arr2 is pointing to an address, and arr1 is pointing to that same address.
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// console.log("changed array", arr2);
// console.log('main array', arr1);



let arr1 = [1, 2, [3, 4], 4, 5];
 //let arr1 = [1,2,4,5,6];
// spread copies value  from one array another array for the first level
//let arr2 = [...arr1];
//arr2[2][0] = 1000;
//arr2.pop();
// arr2[2] = 1000;
// console.log(arr1, "array 1");
// console.log(arr2, "array 2")




// let arr1 = [1, 2, [3, 4], 4, 5];
// // [value,value,ref,value,value]
// let arr2 = [...arr1]
// arr2[2] = 100;
// console.log("orginal arr", arr1, "updated array", arr2);

// let arr1 = [1, 2, [3, 4], 4, 5];
// // [value,value,ref,value,value]
// let arr2 = [...arr1]
// arr2[2][0] = 100;
// console.log("orginal arr", arr1, "updated array", arr2);



// let person1 = {
//     name : 'vishal',
//     age : 29
// }
// let person2 = {...person1}
// person1.age = 30;
// console.log(person1, person2);

// let person1 = {
//     name : 'vishal',
//     age : 29,
//     address : {
//         name: 'kv nagar',
//         street: 'mg road',
//         city: 'blr'
//     }
// }
// let person2 = {...person1}
// person1.age = 30;
// console.log(person1, person2);
// person1.address.city = 'pune';
// console.log(person1, person2);







/****
 * rest -> It is used as paremeter of fn .
 *  use you to collect remianing parameters numbers of params . 
 * last attribute.
 * ***/



// function fn(param1, ...param2) {
//     console.log(" params are ", param1);
//     console.log("Rest paramateres",param2);
// }

//fn("Hi", "Hello");
//fn("Hi", "Hello", "Hola");
//fn();


// const [firstName, lastName, ...otherInfo] = [
//     "virat", "kohli", "cricketer", "rcb", "batesman", "India", "Earth"
//   ];

// console.log(otherInfo);

// const { fName , lName, ...others} = {
//     fName : 'virat',
//     lName : 'kohli',
//     profession: 'cricketer',
//     iplteam : 'rcb',
// }

// console.log(others);
// console.log(typeof others);



//"https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/"