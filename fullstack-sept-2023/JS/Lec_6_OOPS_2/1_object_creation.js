// let obj = {};
// console.log(obj);

/** The above statement internally does below function constructor */
// function constructor for object
// var obj1 = new Object();
// console.log(obj1);

/** this also gets created using Array function constructor */
// var arr1 = [];
// console.log(arr1)


/**
 * ways to create object in js
 * 1. object literal
 * 2. Object.create 
 * **/

/******1. Object literal**************
 * 
 * 1. properties and methods
 * 2. Object -> as your prototype (parent)
 * ***/
// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//     }
// };
// console.log("Object", obj);


/**
 * ************************** Prototypes of datatypes ***************
 * For Non primitive :
 * 1. array -> Array(Object/class)
 * 2. function -> Function
 * 3. object -> Object 
 * 
 * For primitive : temporary parent/prototype
 * *  num -> Number
 * *  str -> String
 * *  boolean -> Boolean
 * *  null and undefined -> no parent
 * * etc 
 *     whenever you want to access any method or property
 *      then that primitive is typecased as a 
 *      children of there respective parent class and 
 *      then that method is applied on that primitive 
 *      then you are returned the answer. -> autoboxing
 *    
 * */

/****
 * hirerachy : Inbuilt object 
 *    null-> Object -> obj
 *                  -> Array -> arr
 *                  -> Function -> function
 *                  -> String
 *                  -> Number
 *                  -> Boolean
 *   
 * */

/**** for primitives datatypes, autoboxing happens */
// let str = "hi i am str";
// console.log(str);
// str.charAt(0);
// console.log(String.prototype);



/**********2.Object create******/
// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//     }
// };
// console.log("Object", obj);

// /****1. you create an object without any parent**/
// let objCreate = Object.create(null);

// objCreate.name = "fake name";
// objCreate.lastName = "fake lastname";
// console.log(objCreate);


// console.log(objCreate.isPrototypeOf(obj));
// console.log(Object.prototype.isPrototypeOf(obj));
// console.log(objCreate);


/********2. creating an object from another object*/
// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//     }
// };

// let obj2 = Object.create(obj);
// console.log(obj2);

// /**overriden the name prop*/
// obj2.name = "symphony";
// obj2.lastname = "rogers";
// console.log("1.", obj2.name, " ", obj2.lastname, obj2.address);
// console.log("2. ", obj.lastname);
// console.log(obj2);


/***
 * Inheritance : 
 *  1. unidirectional flow of data 
 *        a. if you don not have a prop/method -> you go up the prototype chain
 *        b. if you have that -> you use your prop/method
 * **/

// console.log(obj.isPrototypeOf(obj2)); 
// console.log(obj2.isPrototypeOf(obj)); 
// let arr = [];
// console.log(Object.prototype.isPrototypeOf(arr))
// console.log(Object.prototype.isPrototypeOf(Array.prototype))
// console.log(Object.prototype.isPrototypeOf(Function.prototype))
// console.log(Object.prototype.isPrototypeOf(String.prototype))
// console.log(Object.prototype.isPrototypeOf(Number.prototype))
// console.log(Object.prototype.isPrototypeOf(Boolean.prototype))


// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//     }
// };

// let obj2 = Object.create(obj);
// obj2.name = "symphony";
// obj2.lastname = "rogers";
// // console.log(obj2);

// let obj3 = Object.create(obj2);
// obj3.friends = ["tony", "bruce"]
// // console.log(obj3);





//  loop -> object -> for in loop -> iterate over all the prop of the object , 
// inherited which are enumrable to for in



/********for in loop for your own poperties******/
// 1.
// for (let key in obj3) {
//     let isMyKey = obj3.hasOwnProperty(key);
//     if (isMyKey) {
//         console.log("Keys are ", key);
//     }
// }


//2.
/**
 * object.keys -> normal loop
 * **/
// let keys = Object.keys(obj3);
// for (let i = 0; i < keys.length; i++) {
//     console.log(i + " " + keys[i]);
// }




/** Explaining Autoboxing on Primitive datatypes in JS */

/** 
 * Let's see some primitive types in JS. 
 * Let's try a number and a string.
 **/

// const name1 = "Doggo"
// const age = 7

// console.log(typeof name1) // string
// console.log(typeof age) // number
/** name1 has the primitive type string, age is a number. 
 * Both of these primitive types should not have any properties or methods on them. 
 * Let's check that:
 **/

// console.log(name1.length) // 5
// console.log(age.toString()) // "7"

/** Why does this work and not throw an error? 
 * It looks like both of the primitive types are actually objects! 
 * But they're not! They just behave like objects because of autoboxing. 
 * Whenever we try to access a method or property on a primitive, 
 * that primitive is wrapped into an object. 
 * That's called autoboxing. 
 * Autoboxing will connect the primitive to the related built-in prototype object. 
 * In our case that's String.prototype and Number.prototype. 
 * This gives us access to the prototype methods and properties.
 **/


/** Good Read on Autoboxing */ 
// https://www.javascripttutorial.net/javascript-primitive-wrapper-types/
