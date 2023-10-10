// function Person(name, age) {    
//     this.name = name;
//     this.age = age;
//     this.giveIntro = function() {
//         console.log(`my name is ${this.name} and age is ${this.age}`)
//     }
// }

// const person1 = new Person("Avinash",20);
// console.log(person1);
// const person2 = new Person("rahul",20);
// console.log(person2);
// const person3 = new Person("shweta",20);
// const person4 = new Person("varun",20);
// const person5 = new Person("vivek",20);
// const person6 = new Person("varsh",20);




// let arr = [1,2,3,4,5];
// console.log(typeof arr);


let arr = new Array(1,2,3,4,5);
// console.log(arr);
// console.log(typeof arr);
// console.log(typeof Array);


let arr1 = new Array(1,2,3,4,5);
let arr2 = new Array(4,2,3,4,5);
let arr3 = new Array(451,2,3,4,5);

let arr4 = new Array(1665,2,3,4,5);
let arr5 = new Array(143,2,3,4,5);
arr1.sort();
arr2.sort();
// console.log(arr1);
// console.log(arr2);




// [[prototype]]
// console.log(Array.prototype);

// moves 1 level up
// console.log(arr1.__proto__);
// console.log(arr2.__proto__);
// console.log(arr3.__proto__);
// console.log(arr4.__proto__);










// console.log(arr1.__proto__ === Array.prototype)
// console.log(arr2.__proto__ === Array.prototype)
// console.log(arr3.__proto__ === Array.prototype)
// console.log(arr4.__proto__ === Array.prototype)




// first js will try to find in same object, then it will find in the 1 level up, which is its prototype.









function Person(name, age) {
    this.name = name;
    this.age = age;
    this.prototype = function(){
        console.log('i am in fn constructor')
    }
}
Person.prototype.prototype = function() {
    console.log("i am in prototype")
}

Person.prototype.giveIntro = function() {
    console.log(`my name is ${this.name} and age is ${this.age}`)
}


const per1 = new Person("Avinash",20);
// const per2 = new Person("rahul",20);
console.log(per1.prototype());
// console.log(per2)
// console.log(per3)
// console.log(per4)


// per1.giveIntro();
// per1.toString();
// per2.giveIntro();
// per3.giveIntro();
// per4.giveIntro();




//---------------objects-------------//

// console.log(typeof Array);
// console.log(Array.prototype);

// console.log(typeof Object);
// console.log(Object.prototype);

const obj1 = {
    name : 'vishal'
};

let ob1 = new Object();
ob1.name = "vishal";


const obj2 = {
    name : 'varun'
};

const obj3 = {
    name : 'harsh'
};


// console.log(obj1.toString());

// const arrTest = [1,2,3]
// console.log(arrTest)
// console.log(arrTest.toString());





// console.log(arrTest.__proto__ === Array.prototype);
// console.log(arrTest.__proto__.__proto__ === Object.prototype);
// console.log(arrTest.__proto__.__proto__.__proto__)

//
// console.log(arrTest);



// Array.prototype.hello = function() {
//     console.log('hi');
// }

// var emptyArr = [];
// console.log(emptyArr);
// var arr45 = [1,2,3,4,5];

// emptyArr.hello();
// arr45.hello();

