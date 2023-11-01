
let a = document.querySelector("h1");
let p = document.querySelector("p");
let bigV = BigInt(10000000000000000000);
console.log(bigV);
//..
//..
bigV = null;
console.log(a);
// please remove the node fromm the tree  
a.remove();
// to remove it from memory -> 
a=null;
console.log("a", a);
