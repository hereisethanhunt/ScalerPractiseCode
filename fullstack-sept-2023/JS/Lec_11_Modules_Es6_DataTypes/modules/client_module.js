// import anotherVariable from "./lib_module.js";
// default import

// import lib1Default from "./lib1_module.js";
// named exports

//both are same import ways 
import vishal from "./lib_module.js";
import {a,fn} from "./lib_module.js";
// import * as obj from "./lib_module.js";


console.log(a)
console.log(fn())
console.log(vishal)
console.log(this,"windows");
// console.log("Hi i am default exp of lib", libDefault);
// console.log("I am ", obj.a);
// obj.fn();

// console.log("default from lib1", lib1Default)




