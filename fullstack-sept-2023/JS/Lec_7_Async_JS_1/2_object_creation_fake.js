/****3 function constructor before es6*******************/


function Person1(name, age) {
    // {} - this
    // { name : '', age : '' , sayHi: function(){}}
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log(`I am ${this.name} and ${this.age} years old`);
    }
    this.sayNo = function(){
        console.log('no');
    }
    // console.log(this); // here <---
    // return this
}
console.log(Person1.prototype);
// // Person1.prototype.hello = "hi";

const vishal = new Person1("Vishal", 26);
console.log(vishal); // object -> function constructor -> Object -> null
console.log(vishal.__proto__); //

// const vishal1 = new Person1("Vishal", 28);
// let cap = new Person("Cap", 38);

// list of objects with the function constructor


console.log(vishal); // { name,age,sayhi}
// console.log(Object.prototype);
// console.log(cap);
// vishal.sayHi();
// cap.sayHi();


// var dummy = {};
// console.log(dummy);

// let obj2 = Object.create(null);
// obj2.name = 'vishal';
// console.log(obj2);



/******4 class after es6*********/
//  class -> strict mode 
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//     }
//     sayNo(){
//         console.log("no");
//     }
// }

// Person.prototype.sayYes = "1";


// const vishal1 = new Person("Vishal", 28);
// // // let cap = new Person("Cap", 38);
// // vishal1.sayHi();
// // // cap.sayHi();
// console.log(vishal1);


// class SuperHuman extends Person1 {
//     constructor(name, age) {
//         super(name, age)
//     }
//     sayHi() {
//         console.log(`I am super Human and ${this.name} years old`);
//     }
// }


// const superOne = new SuperHuman("Captain america",25);
// console.log(superOne);
// superOne.sayHi();
// check the object itself
// prototype of the object - superhuman sayHi()
// i dint go the prototype of person
// superOne.sayNo();
// check the object itself
// prototype of the object - superhuman sayNo() dont exist
// i go the prototype of person - sayNo()





/***
 * inheritance :  code sharing , saving memory 
 * Prototype is : 
 * In JS we create object from an object ->  that object is your parent or prototype ->that chain goes on 
 * Prototypal Inheritance : you inherit the properties from a parent object/ prototype and that inheritance -> 
 * Prototypal Inheritance.
 * Prototype chain
 * 
 * */
// let arr = []
// the chain from the current object to null -> protoype chain
// console.log(arr.__proto__.__proto__.__proto__)


/** good read - prototype */
// https://www.javascripttutorial.net/javascript-prototypal-inheritance/