/**
 * Inbuilt Errors in Javascript
 * Syntax error - an error when trying to interpret syntactically invalid code
 *
 * try catch only works with run time Error
 * Runtime error -> only get to know after executing the code and it will
 * only fail on the where we have made the error
 * 
 *  TypeError -  represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
 *  Reference Error - represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.
 *  Range Error
 *
 * **/

/*** Syntax error code does not execute at all*/
// 1.  Unexpected identifier
// console.log("Hello");
// le a;

// 2. Illlegal Shadowing : Identifier 'a' has already been declared
// console.log("a");
// let a = 10
// {
//    var a = 20;
//  console.log("Hello",a );  
// }


/**********************Run time Errors************************/
/***
 * Reference Error
 * ***/

// 1. TDZ -> temporal Dead Zone ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a;
// console.log("Before");
// 2. ReferenceError: fn is not defined
// fn();
//  * 2. when you accessing a prop for which object does not exist
// console.log(obj.a);

/***********
 *
 * Range error
 * *****/
// 1. RangeError: Maximum call stack size exceeded stackoverflow  
// infinite recursion
// function foo() {
//     foo();
// }
// foo();

// 2. array size RangeError: Invalid array length
// let a = [];

// a.length = 100 ** 100
// console.log(a.length);


/*****
 * 
 * 
 * 
 * Type error: 
 * 1.whenever a method is called and it does not exist 
 * 2. when you accessing a prop for which object is undefined 
 * *****/
// 1. TypeError: num.toUpperCase is not a function
// let num = 10;
// console.log(num.toUpperCase());

// 2.TypeError: Cannot read properties of undefined (reading 'a')
// let obj = {}
// console.log(obj.someMethod());