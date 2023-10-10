// Metadata -> object descriptors 
// data  -> property                
// value   -> value of that property       
// writable  -> can you change the property  
// enumerable ->  can iterate over the property

let obj = {
    name: "Jasbir"
}

// data - name
// value - Jasbir







Object.defineProperty(obj, 'test', {
    value: 'fail',
    enumerable: true,
    writable: false
});


console.log(obj);
// console.log(obj.test);

for(let key in obj){
    console.log("in loop",key);
}

obj.test = 'pass'; // write the object to some other value
console.log(obj);





// prototype
// let arr = [1,2,3];
// Array.prototype.countOfHi = 0;
// Array.prototype.sayhi = function(){
//     // console.log(this + '- say hi');
//     this.countOfHi++;
// }
// arr.sayhi();
// arr.sayhi();
// arr.sayhi();
// console.log(arr.countOfHi); // 3
// arr.sayhi();
// console.log(arr.countOfHi);
