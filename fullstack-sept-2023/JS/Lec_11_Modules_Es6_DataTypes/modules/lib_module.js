
// you can choose which data you want to make accessible
// and what to hide
let abc = "Hello";
fn();
function fn() {
    console.log("Hi I am Fn");
}
console.log(a,"why");
var a = 10;
let anotherVariable = "another";

export { a, fn };

export default anotherVariable;



// let abc = "Hello";
// function fn() {
//     console.log("Hi I am Fn");
// }
// var a = 10;


/************default export **************/
// console.log("lib is executing");
// let abc = "Hello";
// var a = 10;
// function fn() {
//     console.log("Hi I am Fn", abc);
// }
// console.log("Hi i am lib module");

// named exports
// if anyone imports my file -> by default my anothervar -> exported
// there only one default in a file 






