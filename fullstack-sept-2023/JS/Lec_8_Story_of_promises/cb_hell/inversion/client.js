const { runMlalgo, pRunMLalgo } = require("./lib");
console.log("Before");
let amount = 100;
let priceofOne = 20;
/**
 * takes the amount and callbacks as paramas
 * and it calls the cb for us
 * */
runMlalgo(amount, cb);
//const promise = pRunMLalgo(amount);

function cb() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}


console.log("After");

// i want my cb to be called first of all.
// cb should be called once
// runmlgo shouldnot have issue.



// /before after amount: 80/; 









// promise.then(
//     function cb() {
//         amount = amount - priceofOne;
//         console.log("Amount: ", amount);
//     }
// )