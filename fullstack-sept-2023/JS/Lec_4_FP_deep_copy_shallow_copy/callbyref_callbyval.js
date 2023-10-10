let a = 5;
let b = a;
b++;

console.log(a,b);


let person1 = {
    name : 'vishal',
    age  : 29
}

let person2 = person1;
person2.age++;

console.log(person2, person1);


let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(8);

console.log(arr1, arr2);


const add = (a,b) => {
    return a+b;
}

let anotherAdd = add;
console.log(anotherAdd(3,5));