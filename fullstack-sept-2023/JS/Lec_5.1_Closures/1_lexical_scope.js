

/**
 * outer scope  : every function has access to it's vars
 * as well as as any variable deaclared outside 
 * */


// var y = 100;
// function fn() {
//     /**
//      * you are taking the value from the current/local scope*/
//     var x = 20;
//     console.log("c Value of x is ", x, y);
// }
// var x = 10;
// fn();



var varName = 10;

/**fn def*/
function b() {
    console.log("in b",varName);
}

function fn() {
    var varName = 20;
    /**fn call*/
    b();
    console.log(varName); // 20
}

fn();


// error
// 20 20
// 10 20
// 20 10

/**
 * JS says that outer scope is lexically scoped -> literal existence -> your fn definiton
 * */ 



