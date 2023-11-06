
let productValue = 100;
function apply20Coupon(...args) {
    console.log("fn called" , args)
    //console.log("New price", productValue - (productValue * 0.2));
}
function throttle(fn, interval = 500) {
    let shouldWait = false;
    return function(...args){
        if(shouldWait){
            console.log(args, "throttled not called");
            return;
        }
        fn(...args);
        shouldWait = true;
        setTimeout(()=>{
            shouldWait = false;
        },interval)
    }
}
const throttledApplyCoupon = throttle(apply20Coupon, 3000);
console.log("```````````````````");
throttledApplyCoupon("r1");  // r1
console.log("```````````````````");
throttledApplyCoupon("r2"); // r2 t =0
setTimeout(() => {
    console.log("at t=2000");
    throttledApplyCoupon("r3"); // r3 t = 2
}, 2000);
setTimeout(() => {
    console.log("at t=2000");
    throttledApplyCoupon("r3"); // r3 t = 2
}, 2500);
setTimeout(() => {
    console.log(" at t=5000"); // r4 t = 5
    throttledApplyCoupon("r4"); 
},4000);






