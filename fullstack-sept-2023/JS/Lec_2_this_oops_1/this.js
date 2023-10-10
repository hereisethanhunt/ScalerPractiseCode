// breakpoint
// anything in global scope will point to window object
//console.log(this);












// var person = {
//     name: 'vishal'
// }

// console.log(person);
// console.log(window.person);
// console.log(this.person);







// function sayHi(){
//     console.log(this);
// }
// sayHi();
// window.sayHi();
// this.sayHi();


// var person = {
//     name : 'vishal',
//     age: 29,
//     sayHi: function(){
//         console.log(this);
//     }
// }
// console.log(person.sayHi());





//breakpoint
// var person = {
//     name : 'vishal',
//     age: 29,
//     sayHi: function(){
//         console.log(`my name is ${this.name} and age is ${this.age}`);        
//         function child(){
//             console.log(this);
//         }
//        child();
//     }
// }
// person.sayHi();



// value of this doesnt depend where it is written but who calls it.
// var person = {
//     name : 'vishal',
//     age: 29,
//     sayHi: function(){
//         console.log(this);
//         function child(){
//             console.log(this);
//         }
//        return child;
//     }
// }
// const child = person.sayHi();
// person.sayHi()();






//  function Person(name, age){
//     console.log(this); // line 90 ==>>>>  windows
//     // this {}
//     this.name = name;
//     this.age = age;
//     this.address = "abcd";
//     // return this
//  }

//  var person1 = new Person("vishal","29");
//  var person2 = new Person("abhinav","25");
//  console.log(person1);
//  console.log(person2);

//  var person1 = Person("vishal","29");
//  console.log(person1); 
// instance of person1



// extra questions

//  function logthis(){
//     console.log(this);
//  }
//  const myobj = {
//     logthis
//  }
//  myobj.logthis();



//  function logthis(){
//     console.log(this);
//  }
//  const myobj = {
//     foo : function(){
//         console.log(this);
//         logthis();
//     }
//  }
//  myobj.foo();



// arrow functions

// const add = function(a,b) {
//     console.log(this);
//     return a+b;
// }

// add(1,2);

// console.log(this, "windows");
// const add = (a,b) => {
//     console.log(this);
//     return a+b;
// }

// add(1,2);


// var person = {
//     firstName : "vishal",
//     age: 29,
//     sayHi: () => {
//         console.log(this);
//     }
// }

// console.log(person.sayHi());

// multiple cases
// var person = {
//     name : 'vishal',
//     age: 29,
//     sayHi: function() {
//         console.log(this); // person
//         console.log(this.name);
//         console.log(this.age);
//         var child = () => {
//             console.log(this); 
//             var grandchild = () => {
//                 console.log(this)
//             }
//             grandchild();
//         }
//         child();
//     }
// }
// person.sayHi();

//this linking
// person ===> windows
// sayhi ====> person
// child ====> person


// var person = {
//     name : 'vishal',
//     age: 29,
//     sayHi: () => {
//         console.log(this); 
//         var child = function() {
//             console.log(this); 
//         }
//         child();
//     }
// }
// person.sayHi();


//  const logthis = () => {
//     console.log(this);
//  }
//  const myobj = {
//     logthis
//  }
//  myobj.logthis();


// const call = {
//     caller : 'mom',
//     says: function() {
//         console.log(`hey ${this.caller} just called`);
//     }
// }

// call.says();

// const call = {
//     caller : 'mom',
//     says: () => {
//         console.log(`hey ${this.caller} just called`);
//     }
// }

// call.says();



// const call = {
//     caller : 'mom',
//     says: function() {
//         console.log(this);
//         console.log(`hey ${this.caller} just called`);
//     }
// }

// call.says();
// let newcall = call.says;
// newcall();



// function anothercaller(){
//     console.log(`${this.caller} called too!`)
// }
// const call = {
//     caller : 'mom',
//     anothercaller: anothercaller,
//     says: function() {
//         console.log(`hey ${this.caller} just called`);
//     }
// }

// let newcall = call.anothercaller;
// newcall();



// const a = function() {
//     console.log('a', this);
//     const b = function() {
//         console.log('b', this);

//         const c = {
//             h1: function() {
//                 console.log('c', this);
//             }
//         }

//         c.h1();
//     }
//     b();
// }
// a();


// const obj = {
//     name: 'vishal',

//     sing() {
//         console.log('a', this);
//         var anotherfn = function() {
//             console.log('b', this);
//         }
//         anotherfn();
//     }
// }

// obj.sing();


// const obj = {
//     name: 'vishal',

//     sing() {
//         console.log('a', this);
//         var anotherfn = () => {
//             console.log('b', this);
//         }
//         anotherfn();
//     }
// }

// obj.sing();


// const obj = {
//     name: 'vishal',

//     sing() {
//         console.log('a', this);
//         var self = this;
//         var anotherfn = function(){
//             console.log('b', self);
//         }
//         anotherfn();
//     }
// }

// obj.sing();
